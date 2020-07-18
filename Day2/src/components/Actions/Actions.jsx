import React from "react";
import "./Actions.css";

class Actions extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleClick} className="actionsContainer">
        <input
          className="addInput"
          onChange={this.props.handleChange}
          value={this.props.inputValue}
        />
        <button className="addButton" type="submit">
          add
        </button>
      </form>
    );
  }
}

export default Actions;
