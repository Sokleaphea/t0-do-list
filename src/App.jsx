import { useState } from 'react'
import './App.css'
import './components/TaskInput.jsx'
import TaskInput from './components/TaskInput.jsx';
import TaskItem from './components/TaskItem';



function App() {  
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskText, priority) => {
    const newTask = { 
      text: taskText, 
      completed: false,
      priority
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
  setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const clearCompletedTask = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className='app-container'>
      <h1>My Productivity App</h1>
      <TaskInput onAddTask={addTask}/>
      <p>{tasks.filter(t => !t.completed).length} Task Remaining</p>

      <div>
        <button onClick={() => setFilter("all")} style={{ background: 'yellow', margin: 10}}>All</button>
        <button onClick={() => setFilter("active")} style={{ background: 'lightgreen', margin: 10}}>Active</button>
        <button onClick={() => setFilter("completed")} style={{ background: 'lightblue', margin: 10}}>Completed</button>
        <button onClick={clearCompletedTask}>Clear</button>
      </div>
      <div>
      </div>
      <div className='task-list'>
       {filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            // completed={task.completed}
            onToggleComplete={() => toggleComplete(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>

  );
}

export default App;

