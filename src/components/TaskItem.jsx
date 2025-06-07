function TaskItem({ task, onDelete, onToggleComplete, completed }) {
    return(
        <div>
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={onToggleComplete}
                />

            <span style={{ textDecoration: completed ? 'line-through' : '' }}>
                {task.text} -<strong>{task.priotity}</strong>
            </span>
            <button onClick={onDelete}>Delete</button>

        </div>
    )
}
export default TaskItem;