// src/components/TasksPage.tsx
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../context/Store'; // 👈 Import your store types
import { addTask, toggleTask, deleteTask } from '../context/Task'; // 👈 Import your actions

// Use the Task type from the Redux context
import { Task } from '../context/Task';

const TasksPage: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks); // 👈 Pull tasks from Redux
  const dispatch = useDispatch<AppDispatch>();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

    return (
        <div className="task-page-container">
      <div className="task-page-content">
        <h1>Task List</h1>

      <input
        type="text"
        placeholder="New task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul className="task-list">
        {tasks.map((task: Task) => (
          <li key={task.id} className="task-item">
            <span
              className={`task-title ${task.completed ? 'completed' : ''}`}
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.title}
            </span>
            <button
              className="delete-button"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TasksPage;