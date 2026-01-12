import { useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import EditTaskModal from "../components/EditTaskModal";

export default function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [editTask, setEditTask] = useState(null);

  return (
    <div style={page}>
      <h2>Task Dashboard</h2>

      <AddTask refresh={() => setRefreshKey(k => k + 1)} />

      <TaskList
        refreshKey={refreshKey}
        onEdit={(task) => setEditTask(task)}
      />

      {editTask && (
        <EditTaskModal
          task={editTask}
          close={() => setEditTask(null)}
          refresh={() => setRefreshKey(k => k + 1)}
        />
      )}
    </div>
  );
}

const page = { maxWidth: 500, margin: "40px auto" };
