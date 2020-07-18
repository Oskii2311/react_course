import React from "react";
import "./App.css";
import Title from "./components/Title/Title";
import List from "./components/List/List";
import Actions from "./components/Actions/Actions";

class App extends React.Component {
  state = {
    tasks: [
      { name: "zrob zakupy", isChecked: false },
      { name: "zrob pranie", isChecked: true },
      { name: "umyj naczynia", isChecked: false }
    ],
    newTask: ""
  };

  handleChange = event => {
    this.setState({ newTask: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    if (this.state.newTask !== "") {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { name: this.state.newTask, isChecked: false }
        ],
        newTask: ""
      });
    }
  };

  toggleChecked = name => {
    this.setState({
      tasks: this.state.tasks.map(el => {
        if (el.name === name) {
          return { ...el, isChecked: !el.isChecked };
        }
        return el;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Title text="moja to do lista" />
        <List tasks={this.state.tasks} onLiClick={this.toggleChecked} />
        <Actions
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          inputValue={this.state.newTask}
        />
      </div>
    );
  }
}

export default App;
