import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Container/Header/Headertop/index.js";
import Headerbot from "./Container/Header/headerbot/index.js";
import Home from './Container/Home';
import Footer from './Container/footer';
import ComicDetail from './Container/ComicDetail';
import CategoryMenu from './Container/MenuDetail/Category';
import ScrollToTop from './Components/ScrollToTop';
import SearchMenu from './Container/MenuDetail/SearchMenu';
import SortMenu from './Container/MenuDetail/SortMenu';
import FollowMenu from './Container/MenuDetail/FollowMenu';
import PostComic from './Container/MenuDetail/UserMenu/PostComic';
import HotMenu from './Container/MenuDetail/HotMenu';

function App() {

  

  return (
    <div className="App">
      <Router>
        <Header/>
        <Headerbot/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/comic/:id" component={ComicDetail}/>
          <Route exact path="/theloai" component={CategoryMenu}/>
          <Route exact path="/sort/" component={SortMenu}/>
          <Route exact path="/follow/" component={FollowMenu}/>
          <Route exact path="/search/:searchResult" component={SearchMenu}/>
          <Route exact path="/PostComic" component={PostComic}/>
          <Route exact path="/hot" component={HotMenu}/>
        </Switch>
          <ScrollToTop/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;