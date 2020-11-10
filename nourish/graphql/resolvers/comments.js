const Post = require("../../models/Post");
const { UserInputError } = require("apollo-server");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Mutation: {
    async createComment(_, { postId, body }, context) {
      const { username } = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty comment not allowed");
      }
      const post = await Post.findById(postId);
      if (post) {
        post.comments.unshift({
          body: body,
          username: username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },

    async deleteComment(_, { postId, commentId }, context) {
      const user = checkAuth(context);
      try {
        const post = await Post.findById(postId);
        if (!post) {
          throw new Error("Post not found");
        }
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);
        if (commentIndex === -1) {
          throw new Error("Comment not found");
        }
        if (post.comments[commentIndex].username !== user.username) {
          throw new Error("Action not allowed");
        }
        const comment = post.comments[commentIndex];
        post.comments.splice(commentIndex, 1);
        await post.save();
        return comment;
      } catch (err) {
        throw new Error(err);
      }
    },
    async likePost(_, { postId }, context){
      const { username } = checkAuth(context); 

      const post = await Post.findById(postId);
      if(post){
        if(post.likes.find(like => like.username === username)){
          //Post already liked by the user, so it needs to be unlikekd
          post.likes = post.likes.filter(like => like.username !== username); //only keep likes that are NOT by the user
        } else {
          //Post not already liked by user, so like the post
          post.likes.push({
            username, 
            createdAt: new Date().toISOString()
          });
        }
        await post.save();
        return post;
      } else throw new UserInputError('Post not found'); 
    }
  },
};
