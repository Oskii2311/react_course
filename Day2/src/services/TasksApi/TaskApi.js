class TaskApi {
  URL = "http://localhost:3000/";

  getAllTasks = async () => {
    const res = await fetch(`${this.URL}tasks`);
    const json = await res.json();

    return json;
  };

  createNewTask = async task => {
    await fetch(`${this.URL}tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
  };

  updateTask = async (id, changedData) => {
    await fetch(`${this.URL}tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(changedData)
    });
  };

  deleteTask = async id => {
    await fetch(`${this.URL}tasks/${id}`, {
      method: "DELETE"
    });
  };

  getTask = async id => {
    const res = await fetch(`${this.URL}tasks/${id}`);
    const json = await res.json();

    return json;
  };
}

export default new TaskApi();
