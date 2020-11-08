
import './App.css';
import Header from './header'
import Footer from './footer'
import Post from './post'

function App() {
  return (
    <div className="App">
        <Header />
        <div className="feed">
        <Post />
        </div>
        <Footer />
    </div>
  );
}

export default App;
