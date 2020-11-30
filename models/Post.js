const { model, Schema} = require('mongoose');

const postSchema = new Schema({
    title: String,
    caption: String,
    tags: [String],
    username: String, 
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    imageName: String,
});

module.exports = model('Post', postSchema); 