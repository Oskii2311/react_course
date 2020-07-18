import React from "react";
import "./ToDoList.css";
import List from "../../components/List/List";
import Actions from "../../components/Actions/Actions";
import taskApi from "../../services/TasksApi/TaskApi";

class ToDoList extends React.Component {
  state = {
    tasks: [],
    newTask: ""
  };

  fetchData = async () => {
    const tasks = await taskApi.getAllTasks();
    this.setState({ tasks });
  };

  componentDidMount() {
    this.fetchData();
  }

  handleChange = event => {
    this.setState({ newTask: event.target.value });
  };

  handleClick = async event => {
    event.preventDefault();
    if (this.state.newTask !== "") {
      await taskApi.createNewTask({
        name: this.state.newTask,
        isChecked: false,
        description: ""
      });
      this.fetchData();
      this.setState({
        newTask: ""
      });
    }
  };

  toggleChecked = async id => {
    const element = this.state.tasks.find(el => el.id === id);
    await taskApi.updateTask(id, {
      ...element,
      isChecked: !element.isChecked
    });
    this.fetchData();
  };

  removeElement = async id => {
    await taskApi.deleteTask(id);
    this.fetchData();
  };
  render() {
    return (
      <div className="content">
        <List
          tasks={this.state.tasks}
          onLiClick={this.toggleChecked}
          onRemoveClick={this.removeElement}
        />
        <Actions
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          inputValue={this.state.newTask}
        />
      </div>
    );
  }
}

export default ToDoList;
