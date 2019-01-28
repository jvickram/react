import React, { Component } from "react";
import { Link } from "react-router-dom";

class Shows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      isFetching: false
    };
  }

  refreshed = () => {
    this.setState({ isFetching: true });
    fetch("http://localhost:3000/tvshows")
      .then(res => res.json())
      .then(show => this.setState({ shows: show, isFetching: false }));
  };

  delete = id => {
    fetch("http://localhost:3000/tvshows/" + id, {
      method: "DELETE"
    }).then(this.refreshed);
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("http://localhost:3000/tvshows")
      .then(res => res.json())
      .then(res => this.setState({ shows: res, isFetching: false }));
  }

  render() {
    const tvshows = this.state.shows.map(shows => (
      <tr key={shows.id}>
        <td>{shows.name}</td>
        <td>{shows.genre}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={this.delete.bind(this, shows.id)}
          >
            X
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <Link to="/landing">Back</Link>
            <h2>TV Shows</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Genre</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{tvshows}</tbody>
            </table>
            {this.state.isFetching ? "Fetching....." : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Shows;
