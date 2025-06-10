import React from 'react';


function TaskItem({ task, onDelete, onToggleComplete }) {
    let priorityColor;
    if (task.priority === 'High') {
        priorityColor = 'red';
    } else if (task.priority === 'Medium') {
        priorityColor = 'orange';
    } else if (task.priority === 'Low') {
        priorityColor = 'lightblue';
    }
    const taskTextStyle = {
        textDecoration: task.completed ? 'line-through' : 'none',
        color: priorityColor,
    };

    return (
        <div className='task-item' style={{color: priorityColor}}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onToggleComplete}
            />
            <span style={taskTextStyle}>
                {task.text}
            </span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default TaskItem;