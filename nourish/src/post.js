import React from 'react';
import './post.css'

function Post() {
    return (
      <div className="container-post">
        <div className="post-image">
            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="post"/>
        </div>
        <div className="post-content">
          <h1 className="title-post">posts</h1>
          <p className="paragraphs">hdokenckldencfklnekcfnweknndckne</p>
          <h5 className="tags">############</h5>
          <h5 className="likes">45 likes</h5>
          <h5 className="comment-title">COMMENTS</h5>
          <h5 className="comments">i like this</h5>
        </div>
      </div>
    )
  }
  
  export default Post