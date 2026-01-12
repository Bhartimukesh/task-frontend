import { useState } from "react";
import API from "../axios";

export default function AddTask({ refresh }) {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    setTitle("");
    refresh();
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

