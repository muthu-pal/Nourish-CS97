const { gql } = require("apollo-server");


module.exports = gql`
  type Post {
    id: ID!
    title: String!
    caption: String!
    tags: [String]!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    imageName: String!

  }
  type Comment {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
  }
  type File{
    url: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    hello: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(title: String!, caption: String!, tags: [String]!, imageName: String!): Post!
    deletePost(postId: ID!): Post!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Comment!
    likePost(postId: ID!): Post!
    uploadFile(file: Upload!): File! 
  }
`;
