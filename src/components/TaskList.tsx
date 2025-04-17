import React, { useState } from 'react';
import { Task } from '../context/Task';
import Navbar from './NavBar';



const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const addTask = () => {
    if (task.trim() === '') return;

    const newTask: Task = {
      id: new Date().getTime(),
      task: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const removeTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
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

  const saveEdit = () => {
    setTasks(
      tasks.map((t) =>
        t.id === editingTaskId ? { ...t, task: task } : t
      )
    );
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
          onChange={(e) => setTask(e.target.value)}
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