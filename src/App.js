import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import AddPost from "./components/addPost";
import Comments from "./components/comments";
import Info from "./components/info";
import Shows from "./components/shows";
import Landing from "./components/landing";
import Header from "./components/header";
import Users from "./components/users/users";
import EditPost from "./components/editPost";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route paths="/header" component={Header} />
          <Route path="/landing" component={Landing} />
          <Route path="/posts" component={Posts} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/editpost/:id" component={EditPost} />
          <Route path="/info" component={Info} />
          <Route path="/shows" component={Shows} />
          <Route path="/comments" component={Comments} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
