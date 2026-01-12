export default function TaskItem({ task, onDelete, onEdit }) {
  return (
    <div style={{ marginTop: 10 }}>
      {task.title}
      <button onClick={() => onEdit(task)}>✏️</button>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </div>
  );
}
