import React from "react";

const UserFunc = props => {
  return (
    <tbody>
      <tr>
        <td>User id: {props.id}</td>
        <td>Name: {props.name}</td>
        <td>Age: {props.age}</td>
        <td>
          <button className="btn btn-danger float-right" onClick={props.delete}>
            X
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserFunc;
