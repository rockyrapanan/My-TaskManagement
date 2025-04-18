import React, { useState } from 'react';
import { Task } from '../context/Task'; // If it's really a "type", move to types/Task.ts
import Navbar from './NavBar';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (!task.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      task: task.trim(),
      completed: false,
    };

    setTasks(prev => [...prev, newTask]);
    setTask('');
  };

  const removeTask = (id: number): void => {
    setTasks(tasks.filter((t) => t.id !== id));
    if (editingTaskId === id) {
      setEditingTaskId(null);
      setTask('');
    }
  };

  const startEditing = (taskId: number): void => {
    const taskToEdit = tasks.find((t) => t.id === taskId);
    if (taskToEdit) {
      setEditingTaskId(taskId);
      setTask(taskToEdit.task);
    }
  };

  const saveEdit = (): void => {
    if (!task.trim() || editingTaskId === null) return;

    setTasks(tasks.map(t => 
      t.id === editingTaskId ? { ...t, task: task.trim() } : t
    ));

    setEditingTaskId(null);
    setTask('');
  };

  return (
    <>
      <Navbar />
      <div className="task-list">
        <h1>Task List</h1>

        <label htmlFor="taskInput">Task:</label>
        <input
          id="taskInput"
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />

        {editingTaskId === null ? (
          <button onClick={addTask}>Add Task</button>
        ) : (
          <button onClick={saveEdit}>Save</button>
        )}

        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              {t.task}
              <button onClick={() => startEditing(t.id)}>Edit</button>
              <button onClick={() => removeTask(t.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;