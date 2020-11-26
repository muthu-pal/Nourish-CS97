
import './App.css';
import Header from './header'
import Footer from './footer'
import Post from './post'

function Search(props) {
  let postsToReturn = <div></div>;
  let test_tags = "one"; 

  if(props.dataFromDB!=null){
        console.log("not null")
            postsToReturn = props.dataFromDB.getPosts.filter((post)=>(post.tags.includes(test_tags))).map((post)=>(

                  <Post image={post.imageName}
                  title={post.title}
                  paragraph={post.caption}
                  tags={post.tags}
                  likes={post.likes.length}
                  comments={post.comments.length > 0 ? post.comments.map((comment)=>(<ul key={comment.id}>{comment.body}</ul>)) : ""}
                  key={post.id}
                  />
      )); 
  }
  return (
    <div className="App">
        <Header />
        <div className="feed">
            {postsToReturn}
        </div>
        <Footer />
    </div>
  );
}

export default Search;
