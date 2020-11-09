const Post = require('../../models/Post'); 

module.exports = {
    Query: {
        async getPosts(){
            try{
                const posts = await Post.find();
                return posts; 
            } catch(err){
                throw new Error(err); 
            }
        },
        async getPost(_, { postId }){
            try{
                const post = await Post.findById(postId); 
                if(post){
                    return post; 
                }
                //the video is slightly different here (e.g. it has an "else" and then separate 
                //catch statement), but I found that doesn't work. Retry if you want. 
            } 
            catch{
                throw new Error('Post not found'); 
            }
        }
    }
};