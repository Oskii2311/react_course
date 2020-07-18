import React from "react";

class Actions extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleClick}>
        <input
          onChange={this.props.handleChange}
          value={this.props.inputValue}
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default Actions;
