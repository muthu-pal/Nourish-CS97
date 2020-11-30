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
  const [searchString, setSearchSearchString] = useState("");
  

  function onChange(event){
    // let a = event.target.value;
    // //let res = a.split(" ").join("").split(',');
    // let res = a.split(',');
    // console.log(res);
    // let resNoDupes = [...new Set(res)];
    // console.log(resNoDupes);
    // let resNoSpace = resNoDupes.map((query) => (query.split(" ").join("")))
    // console.log(resNoSpace);
    // setSearchQuery(resNoSpace);
    // if (event.target.value !== ""){
    //   setSearched(true);
    // }
    setSearchSearchString(event.target.value);
    if (event.target.value !== ""){
      setSearched(true);
    }
  }

  function onSubmit(){
    
    let res = searchString.split(" ").join("").split(',');
    let resNoDupes = [...new Set(res)];
    console.log(resNoDupes);
    setSearchQuery(resNoDupes);
  }


  if(props.dataFromDB!=null){
        console.log("not null")
            postsToReturn = props.dataFromDB.getPosts.filter((post)=>(post.tags.some(i => searchQuery.includes(i)))).map((post)=>(

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
        
        <div className="input-div">
            <label htmlFor='title'>Enter Search:  </label>
            <input className="input"
              name='searchString'
              placeholder='Separate your tags by commas (ex. food, produce, fruit)'
              value={searchString}
              onChange={onChange}
            />
            <button className="searchButton" onClick={onSubmit}>submit</button>
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
