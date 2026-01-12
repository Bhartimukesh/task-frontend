import { useEffect, useState } from "react";
import API from "../axios";
import TaskItem from "./TaskItem";

export default function TaskList({ refreshKey, onEdit }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    API.get("/tasks").then(res => setTasks(res.data));
  };

  useEffect(loadTasks, [refreshKey]);

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <>
      {tasks.map(t => (
        <TaskItem key={t._id} task={t} onDelete={deleteTask} onEdit={onEdit} />
      ))}
    </>
  );
}
