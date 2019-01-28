import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      Title: "",
      Url: "",
      ThumbnailUrl: ""
    };
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  save(e) {
    e.preventDefault();
    const newShow = {
      id: this.state.id,
      Title: this.state.Title,
      Url: this.state.Url,
      ThumbnailUrl: this.state.ThumbnailUrl
    };
    // console.log(newShow);

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newShow)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  componentDidUpdate() {}

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
                  onClick={this.save}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
