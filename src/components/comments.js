import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      infos: [],
      isLoading: false
    };
  }

  delete(id) {
    fetch("http://localhost:3000/comments/" + id, {
      method: "DELETE"
    }).then(this.refereshed);
  }

  refereshed = () => {
    this.setState({ ...this.state, isLoading: true });
    fetch("http://localhost:3000/comments")
      .then(res => res.json())
      .then(comments =>
        this.setState({ comments: comments, isLoading: false })
      );
  };

  componentDidMount() {
    this.setState({ ...this.state, isLoading: true });
    fetch("http://localhost:3000/comments")
      .then(res => res.json())
      .then(comments =>
        this.setState({ comments: comments, isLoading: false })
      );
  }

  componentWillUnmount() {
    this.setState({ Comments: null });
  }

  render() {
    const comt = this.state.comments.map(co => (
      <div className="col-md-4" key={co.id}>
        <p>{this.state.isLoading ? "Loading data......." : ""}</p>
        <p>
          <button
            className="btn btn-danger float-right margin-bottom"
            onClick={this.delete.bind(this, co.id)}
          >
            X
          </button>
          <b>Id :</b> {co.id}
          <br />
          <b>Comments:</b> {co.comment}
        </p>
      </div>
    ));

    return (
      <div className="container-fluid">
        <a href="/">Back</a>
        <div className="row">
          <h3>{this.state.isLoading ? "Loading.............." : ""}</h3>
          {comt}
        </div>
      </div>
    );
  }
}

export default Comments;
