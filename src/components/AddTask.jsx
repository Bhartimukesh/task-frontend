import { useState } from "react";
import API from "../axios";

export default function AddTask({ refresh }) {
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    setTitle("");
    refresh();
  };

  return (
    <div style={box}>
      <input
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={input}
      />
      <button onClick={handleAdd} style={btn}>Add</button>
    </div>
  );
}

const box = { display: "flex", gap: 10, marginBottom: 20 };
const input = { flex: 1, padding: 10 };
const btn = { padding: "10px 20px", background: "#4caf50", color: "#fff" };
