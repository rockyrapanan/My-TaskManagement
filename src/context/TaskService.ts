// src/services/TaskService.ts
import axios from 'axios';
import { Task } from '../context/Task';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const res = await axios.post(API_URL, task);
  return res.data;
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<Task> => {
  const res = await axios.put(`${API_URL}/${id}`, task);
  return res.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};