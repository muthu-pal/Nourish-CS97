
import './App.css';
import Header from './header'
import Footer from './footer'
import Post from './post'

function Home(props) {

  let postsToReturn = <div></div>;
 
  if(props.dataFromDB!=null){
        console.log("not null")
            postsToReturn = props.dataFromDB.getPosts.map((post)=>(
                  <Post image={post.imageName}
                  title={post.title}
                  paragraph={post.caption}
                  tags={post.tags}
                  likes={post.likes}
                  comments={post.comments}
                  key={post.id}
                  id={post.id}
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

export default Home;
