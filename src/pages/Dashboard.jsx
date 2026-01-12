import { useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import EditTaskModal from "../components/EditTaskModal";

export default function Dashboard() {
  const [refresh, setRefresh] = useState(0);
  const [editTask, setEditTask] = useState(null);

  return (
    <>
      <h2>Task Dashboard</h2>
      <AddTask refresh={() => setRefresh(r => r + 1)} />
      <TaskList refreshKey={refresh} onEdit={setEditTask} />
      {editTask && (
        <EditTaskModal
          task={editTask}
          close={() => setEditTask(null)}
          refresh={() => setRefresh(r => r + 1)}
        />
      )}
    </>
  );
}

