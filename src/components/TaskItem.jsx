export default function TaskItem({ task, onDelete, onEdit }) {
  return (
    <div style={row}>
      <span>{task.title}</span>
      <div>
        <button onClick={() => onEdit(task)} style={edit}>✏️</button>
        <button onClick={() => onDelete(task._id)} style={del}>🗑️</button>
      </div>
    </div>
  );
}

const row = { display: "flex", justifyContent: "space-between", padding: 12, background: "#fff", marginBottom: 10 };
const edit = { marginRight: 10 };
const del = { color: "red" };
