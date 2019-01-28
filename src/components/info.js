import React, { Component } from "react";
import AddInfo from "./addinfo";
import "./info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      info1: props.info1,
      isLoading: false
    };
    this.save = this.save.bind(this);
  }

  save(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  delete(id) {
    fetch("http://localhost:3000/info/" + id, {
      method: "DELETE"
    }).then(this.refereshed);
  }

  refereshed = () => {
    this.setState({ isLoading: true });
    fetch("http://localhost:3000/info")
      .then(res => res.json())
      .then(info => this.setState({ info: info, isLoading: false }));
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3000/info")
      .then(res => res.json())
      .then(info => this.setState({ info: info, isLoading: false }));
  }

  render() {
    const information = this.state.info.map(info => (
      <div className="col-md-12 card" key={info.id}>
        <div className="row">
          <div className="col-md-10">
            <p>
              <b>Id:</b> {info.id}
            </p>
            <p>
              <b>Info: </b> {info.info}
            </p>
            <AddInfo
              name={info.info}
              change={event => this.save(event, info.id)}
            />
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-danger "
              onClick={this.delete.bind(this, info.id)}
            >
              X
            </button>
            <button
              className="btn btn-primary"
              // onClick={this.save(info.id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <a href="/">Back</a>

        <div className="container">
          <h2>The Info is here</h2>
          <div className="row">
            <br />
            <h3>{this.state.isLoading ? "Loading data...." : ""}</h3>
            {information}
          </div>
        </div>
        {/* <AddInfo /> */}
      </div>
    );
  }
}

export default Info;
