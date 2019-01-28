import React from "react";

export default function AddInfo(props) {
  return (
    <div>
      <form>
        <label>Info: </label>
        <input
          type="text"
          name="name"
          value={props.name}
          width="100px"
          onChange={props.change}
        />
        {/* <button type="submit" onClick={props.onSave}>
          Save
        </button> */}
      </form>
    </div>
  );
}
