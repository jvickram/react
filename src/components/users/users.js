import React, { Component } from "react";
// import UserFunc from "./userfunc";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        // { id: 1, name: "Bickey", age: 26 },
        // { id: 2, name: "Wasim", age: 24 }
      ],
      isFetching: false,
      id: ""
    };
    // this.delete = this.delete.bind(this);
  }

  delete = id => {
    // this.setState({ id: index });
    // const user = Object.assign([], this.state.users);
    // user.splice(index, 1);
    // this.setState({ users: user });
    // console.log(index);

    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE"
    }).then(this.refreshed);

    console.log(id);
  };

  refreshed = () => {
    this.setState({ isFetching: true });
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => this.setState({ users: users, isFetching: false }));
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => this.setState({ users: users, isFetching: false }));
  }

  render() {
    const userdata = this.state.users.map((user, index) => (
      //   <UserFunc
      //     key={user.id}
      //     id={user.id}
      //     name={user.name}
      //     age={user.age}
      //     delete={this.delete.bind(index)}
      //   />

      <tbody key={user.id}>
        <tr>
          <td>User id: {user.id}</td>
          <td>Name: {user.name}</td>
          <td>Age: {user.age}</td>
          <td>
            <button
              className="btn btn-danger float-right"
              onClick={this.delete.bind(this, user.id)}
            >
              X
            </button>
          </td>
        </tr>
      </tbody>
    ));

    return (
      <div>
        <h3>Users are here:</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>

          {userdata}
        </table>
        {this.state.isFetching ? "Fetching data" : ""}
      </div>
    );
  }
}
