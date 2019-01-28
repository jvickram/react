import React, { Component } from "react";
import "./Posts.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isFetching: false,
      editPost: {
        id: "",
        Title: "",
        Url: "",
        Thumbnail: ""
      }
    };
  }

  refereshed = () => {
    this.setState({ isFetching: true });
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.setState({ posts: data, isFetching: false }));
  };

  delete = id => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "Delete"
    }).then(this.refereshed);
  };

  edit = (id, Title, Url, ThumbnailUrl) => {
    this.setState({ editPost: { id, Title, Url, ThumbnailUrl } });
    console.log(this.editPost);
  };

  componentWillMount() {
    this.setState({ isFetching: true });
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.setState({ posts: data, isFetching: false }));
  }
  render() {
    const PostView = this.state.posts.map(post => (
      <div className=" col-xs col-sm-6 col-md-4 card" key={post.id}>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-sm-6 col-md-4">
              <img src={post.ThumbnailUrl} alt="Thumbnail" />
            </div>
            <div className="col-sm-6 col-md-4">
              Title: {post.Title}
              {/* <img src={post.Url} alt="Poster" /> */}
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-danger"
                onClick={this.delete.bind(this, post.id)}
              >
                X
              </button>
              {/* <button
                className="btn btn-danger"
                onClick={this.edit.bind(
                  this,
                  post.id,
                  post.Title,
                  post.Url,
                  post.ThumbnailUrl
                )}
              >
                Edit
              </button> */}
              <Link to={`editpost/` + post.id} className="btn btn-primary">
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <Link className="float-right" to="/landing">
          Back
        </Link>
        <h2>Posts:</h2>

        <div className="container">
          <div className="row">
            <p className="fetching">
              {this.state.isFetching ? "Fetching........" : ""}
            </p>
            {PostView}
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
