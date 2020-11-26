const { AuthenticationError } = require("apollo-server");

const Post = require("../../models/Post");
const checkAuth = require("../../util/check-auth");

const path = require('path');
const fs = require('fs');

module.exports = {
  Query: {
    hello: () => 'hello world test',
    async getPosts() {
      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error("Post not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async createPost(_, { title, caption, tags, imageName }, context) {
      const user = checkAuth(context);

      if (title.trim() === '' && caption.trim() === '' && tags.length === 0 && imageName.length===0){
        throw new Error('Post must not be empty'); 
      }

      const newPost = new Post({
        title,
        caption,
        tags,
        imageName,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString()
      });
      const post = await newPost.save();
      return post;
    },
    uploadFile: async (parent, { file })=> {
      const { createReadStream, filename, mimetype, encoding } = await file
      const stream = createReadStream()
      const pathName = path.join(__dirname,`../../src/images/${filename}`) //each .. means go up one directory (. would mean current directory)
      await stream.pipe(fs.createWriteStream(pathName))
      return {
        url: `http://localhost:5000/src/images/${filename}`,
      }
    },
    async deletePost(_, { postId }, context) {
      const user = checkAuth(context);
      try {
        const post = await Post.findById(postId);
        if (!post) {
          throw new Error("Post not found");
        }
        if (user.username === post.username) {
          await Post.findByIdAndDelete(postId);
          return post;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
