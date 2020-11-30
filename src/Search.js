import React, {useState} from 'react';
import './App.css';
import Header from './header'
import Footer from './footer'
import Post from './post'
import './Upload.css'; 

function Search(props) {
  let postsToReturn = <div></div>;

  const [searchQuery, setSearchQuery] = useState([]);
  const [searched, setSearched] = useState(false);

  

  function onChange(event){
    let a = event.target.value;
    let res = a.split(" ").join("").split(',');
    let resNoDupes = [...new Set(res)];
    setSearchQuery(resNoDupes);
    if (event.target.value !== ""){
      setSearched(true);
    }
  }


  if(props.dataFromDB!=null){
        console.log("not null")
            postsToReturn = props.dataFromDB.getPosts.filter((post)=>(post.tags.some(i => searchQuery.includes(i)))).map((post)=>(

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
        
        <div className="input-div">
            <label htmlFor='title'>Enter Search:  </label>
            <input className="input"
              name='searchQuery'
              placeholder='Separate your tags by commas'
              value={searchQuery}
              onChange={onChange}
            />
        </div>
        {(searched)
          ?(
            (postsToReturn.length !== 0) 
            ?(<div className="feed">
                {postsToReturn}
              </div>
             )
              
            :(<div>
              <h3>Nothing to see here.</h3>
            </div>)
             )
          
          :(<div>
            <h3>Enter your search.</h3>
          </div>
          )
        }
        <Footer />
    </div>
  );
}

export default Search;
