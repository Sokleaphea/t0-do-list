import React from "react";
import { useState } from "react";


function TaskInput({ onAddTask }) {
    const [inputValue, setInputValue] = useState("");
    const [priority, setPriority] = useState("Medium");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        onAddTask(inputValue);
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                placeholder="Enter a task..."
                onChange={(e) => setInputValue(e.target.value)}
                style={{
                    padding: 0
                }}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
        
    );
};

export default TaskInput;