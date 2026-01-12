import { useEffect, useState } from "react";
import API from "../axios";
import TaskItem from "./TaskItem";

export default function TaskList({ refreshKey, onEdit }) {
  const [tasks, setTasks] = useState([]);

  const load = () => API.get("/tasks").then(r => setTasks(r.data));
  useEffect(load, [refreshKey]);

  const del = async (id) => {
    await API.delete(`/tasks/${id}`);
    load();
  };

  return tasks.map(t => (
    <TaskItem key={t.id} task={t} onDelete={del} onEdit={onEdit} />
  ));
}

