import { useState } from "react";
import API from "../axios";

export default function EditTaskModal({ task, close, refresh }) {
  const [title, setTitle] = useState(task.title);

  const update = async () => {
    await API.put(`/tasks/${task.id}`, { title });
    refresh();
    close();
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={update}>Update</button>
      <button onClick={close}>Cancel</button>
    </div>
  );
}

