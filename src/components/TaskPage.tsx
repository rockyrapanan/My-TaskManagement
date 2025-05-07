// src/components/TasksPage.tsx
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../context/Store'; // Import your store types
import { addTask, toggleTask, deleteTask, editTask } from '../context/Task'; // Import your actions
import PageLayout from '../components/PageLayout'; // Import your PageLayout component


// Use the Task type from the Redux context
import { Task } from '../context/Task';

const TasksPage: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks); // Pull tasks from Redux
  const dispatch = useDispatch<AppDispatch>();
  const [newTask, setNewTask] = useState('');
  // Removed unused editTaskId state
  const [editTaskId, setEditTaskId] = useState<string | null>(null); // State to track the task being edited
  const [editedTitle, setEditedTitle] = useState<string>(''); // State to track the edited task title

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleEditTask = (task: Task) => {
      setEditTaskId(task.id); // Set the task ID being edited
      setEditedTitle(task.title);
  };

  const handleSaveEdit = () => {
    if (editTaskId && editedTitle.trim() !== '') {
      dispatch(editTask({ id: editTaskId, title: editedTitle }));
      setEditTaskId(null); // Clear the edit task ID after saving
      setEditedTitle(''); // Clear the edited title
    }
  };

    return (
       
      
      <PageLayout> {/* Wrap the content with PageLayout */}
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
      className="edit-button"
      onClick={() => handleEditTask(task)}
    >
        Edit
    </button>
    {editTaskId === task.id && (
        <div className="edit-actions">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Edit task title..."
            className="edit-input"
          />
          <button className="save-button" onClick={handleSaveEdit}>
            Save
          </button>
        </div>
    )}
    
    <div className="task-actions">
            <button
              className="delete-button"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
    </div>


          </li>
        ))}
      </ul>
      </div>
    </div>
  </PageLayout> 
  
    );
};


export default TasksPage;