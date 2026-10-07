import { useEffect, useState } from "react";
import "./App.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const loadTasks = async () => {
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        priority,
      }),
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");

    loadTasks();
  };

  const changeStatus = async (id, status) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    });

    loadTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    loadTasks();
  };

  return (
    <div className="container">
      <h1>DeMate</h1>

      <p className="subtitle">
        Developer Task & Deployment Manager
      </p>

      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button type="submit">
          Add Task
        </button>
      </form>

      <div className="tasks">
        {tasks.map((task) => (
          <div className="task" key={task._id}>
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
              <strong>Priority:</strong> {task.priority}
            </p>

            <select
              value={task.status}
              onChange={(e) =>
                changeStatus(task._id, e.target.value)
              }
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <button
              className="delete"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;