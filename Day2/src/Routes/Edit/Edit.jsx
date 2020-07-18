import React from "react";
import "../../components/Actions/Actions.css";
import taskApi from "../../services/TasksApi/TaskApi";
import "./Edit.css";

class Edit extends React.Component {
  state = {
    id: this.props.match.params.id,
    task: {
      name: "",
      isChecked: false,
      description: ""
    }
  };

  fetchTask = async () => {
    const task = await taskApi.getTask(this.props.match.params.id);
    this.setState({ task });
  };

  componentDidMount() {
    this.fetchTask();
  }

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ task: { ...this.state.task, [name]: value } });
  };

  onEdit = async () => {
    await taskApi.updateTask(this.state.id, this.state.task);
    this.props.history.push("/todolist");
  };

  render() {
    return (
      <div className="container">
        <div className="formInput">
          <label>name </label>
          <input
            className="addInput"
            value={this.state.task.name}
            name="name"
            onChange={this.onInputChange}
          />
        </div>
        <div className="formInput">
          <label>description</label>
          <input
            className="addInput"
            value={this.state.task.description}
            name="description"
            onChange={this.onInputChange}
          />
        </div>
        <button className="addButton" onClick={this.onEdit}>
          edit
        </button>
      </div>
    );
  }
}

export default Edit;
