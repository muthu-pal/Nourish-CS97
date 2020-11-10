import React from 'react';
import './post.css'

function Post(props) {
    return (
      <div className="container-post">
        <div className="post-image">
            <img src={props.image} alt="post"/>
        </div>
        <div className="post-content">
          <h1 className="title-post">{props.title}</h1>
          <p className="paragraphs">{props.paragraph}</p>
          <h5 className="tags">Tags: {props.tags}</h5>
          <h5 className="likes">{props.likes} likes</h5>
          <h5 className="comment-title">COMMENTS</h5>
          <p className="comments">{props.comments}</p>
        </div>
      </div>
    )
  }
  
  export default Post

  //"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"