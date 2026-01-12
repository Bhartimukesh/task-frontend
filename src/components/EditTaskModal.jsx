import { useState } from "react";
import API from "../axios";

export default function EditTaskModal({ task, close, refresh }) {
  const [title, setTitle] = useState(task.title);

  const update = async () => {
    await API.put(`/tasks/${task._id}`, { title });
    refresh();
    close();
  };

  return (
    <div style={modal}>
      <div style={card}>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <button onClick={update}>Update</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}

const modal = { position: "fixed", inset: 0, background: "#00000088", display: "flex", alignItems: "center", justifyContent: "center" };
const card = { background: "#fff", padding: 20 };
