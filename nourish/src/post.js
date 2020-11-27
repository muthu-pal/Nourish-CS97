import React , { useContext, useEffect, useState } from 'react';
import './post.css'
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import { AuthContext } from './context/auth'; 

function Post(props) {

  const { user } = useContext(AuthContext);

  const [liked, setLiked] = useState(false);
  const [currentComments, setCurrentComments] = useState(props.comments); 
  const [addedComment, setAddedComment ] = useState(0); 
//end of upload comment stuff

  useEffect(() => {
    if (user && props.likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, props.likes]);

  useEffect(() => {
    setCurrentComments(props.comments); 
    console.log('hello');
  }, [user, currentComments]);

  const [likePost] = useMutation(LIKE_POST,{
    variables: { postId: props.id }
  })

  const likeButton = 
  user ? (
    liked ? (
      <div className="likeBox">
        <button className="likeButton" onClick={likePost} style={{backgroundColor:"#F44336", color:"white"}}>Liked</button> 
        <h5 className="likes">{props.likes.length} likes</h5>
      </div>
    ) : (
      <div className="likeBox">
        <button className="likeButton" onClick={likePost} style={{backgroundColor:"white", color:"#F44336"}}>Like</button> 
        <h5 className="likes">{props.likes.length} likes</h5>
      </div>
    )
  ) : (
    <div className="likeBox-notLoggedIn">
        <p className="paragraphLikeBox">Log in to like posts.</p> 
        <h5 className="likes">{props.likes.length} likes</h5>
      </div>
  );
  
  //upload comment stuff
  const [uploadComment] = useMutation(UPLOAD_COMMENT,{
  
  })
  function submitComment(){
    const body_val = document.getElementById(`${props.id}`).value;
    const id_val = props.id; 
    //if(!commentValue) alert('Cannot submit empty comments'); 
    uploadComment({ variables: { postId: id_val, body: body_val}})
    document.getElementById(`${props.id}`).value = "";
  }
  
//props.comments.length > 0 ? post.comments.map((comment)=>(<ul key={comment.id}>{comment.body}</ul>)
  const commentInput = 
  user ? (
      <div>
        <h5 className="comment-title">COMMENTS</h5>
        <div className="comment-div">
          <input className="comment-input"
            name='commentText'
            placeholder='enter comment here...'
            id={props.id}
          />
        </div>
        <button className="commentButton" onClick={submitComment}>Submit</button>
        {currentComments.length > 0 ? currentComments.map((comment)=>(<ul key={comment.id}>{comment.body}</ul>)) : ""}
      </div>
  ) : (
    <div>
      <h5 className="comment-title">COMMENTS</h5>
      {currentComments.length > 0 ? currentComments.map((comment)=>(<ul key={comment.id}>{comment.body}</ul>)) : ""}
    </div>
  );


  if(props.image!==''){
    return (
      <div className="container-post">
        <div className="post-image">
          <img src={require('./images/'+props.image).default} alt=""/>

        </div>
        <div className="post-content">
          <h1 className="title-post">{props.title}</h1>
          <p className="paragraphs">{props.paragraph}</p>
          <h5 className="tags">Tags: {props.tags.toString()}</h5>
          {likeButton}
          {commentInput}
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="container-post">
        <div className="post-image">
          NO IMAGE

        </div>
        <div className="post-content">
          <h1 className="title-post">{props.title}</h1>
          <p className="paragraphs">{props.paragraph}</p>
          <h5 className="tags">Tags: {props.tags.toString()}</h5>
          {likeButton}
          {commentInput}
          <h5 className="comment-title">COMMENTS</h5>
          <p className="comments">{props.comments}</p>
        </div>
      </div>
    )
  }
  }
  
  const LIKE_POST = gql`
  mutation likePost($postId: ID!){
    likePost(postId: $postId){
      id
      likes{
        id username
      }
    }
  }
`

const UPLOAD_COMMENT = gql`
  mutation createComment($postId: ID!, $body: String!){
    createComment(postId: $postId, body: $body){
      id
    }
  }
`
  export default Post

  //"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"