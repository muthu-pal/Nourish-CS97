
import './App.css';
import Header from './header'
import Footer from './footer'
import Post from './post'

function Home() {
  return (
    <div className="App">
        <Header />
        <div className="feed">
        <Post image={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"}
              title={"selling some cool produce from my garden at home i have lots of food"}
              paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
              tags={"produce, food, grocery"}
              likes={49}
              comments={"wow can i have some"} />
        <Post image={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"}
              title={"selling some produce"}
              paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
              tags={"produce, food, grocery"}
              likes={49}
              comments={"wow can i have some"} />
        <Post image={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"}
              title={"selling some produce"}
              paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
              tags={"produce, food, grocery"}
              likes={49}
              comments={"wow can i have some"} />
        
        </div>
        <Footer />
    </div>
  );
}

export default Home;
