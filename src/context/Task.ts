
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Task type
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Load tasks from localStorage
const loadTasks = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: loadTasks()
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        title: action.payload,
        completed: false
      };
      state.tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save after add
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save after toggle
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks)); // Save after delete
    }
  }
});

// Export actions
export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

// Export reducer
export default tasksSlice.reducer;