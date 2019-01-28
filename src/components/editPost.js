import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      Title: "",
      Url: "",
      ThumbnailUrl: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editPost(newShow) {
    console.log(newShow);
    fetch("http://localhost:3000/posts/" + this.props.match.params.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newShow)
    }).then(this.props.history.push("/posts"));
    // .then(res => res.json())
    //   .then(data => console.log(data));
  }

  onSubmit(e) {
    // e.preventDefault();
    const newShow = {
      id: this.state.id,
      Title: this.state.Title,
      Url: this.state.Url,
      ThumbnailUrl: this.state.ThumbnailUrl
    };
    this.editPost(newShow);
    e.preventDefault();
    // console.log(e);
  }

  getPost() {
    let postid = this.props.match.params.id;
    // console.log(postid);
    fetch("http://localhost:3000/posts/" + postid)
      .then(res => res.json())
      .then(response =>
        this.setState({
          //   id: data.id,
          Title: response.Title,
          Url: response.Url,
          ThumbnailUrl: response.ThumbnailUrl
        })
      );
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>

        <div className="container">
          <div className="row">
            <div className="col-sm col-md-10">
              <form>
                <div className="form-group">
                  <label htmlFor="Title">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    name="Title"
                    onChange={this.onChange}
                    value={this.state.Title}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Url">Url:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Url"
                    name="Url"
                    onChange={this.onChange}
                    value={this.state.Url}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ThumbnailUrl">ThumbnailUrl:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ThumbnailUrl"
                    name="ThumbnailUrl"
                    onChange={this.onChange}
                    value={this.state.ThumbnailUrl}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onSubmit.bind(
                    this
                    // this.state.Title,
                    // this.state.Url,
                    // this.state.ThumbnailUrl
                  )}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPost;
