import type { Task } from "../models/Task";

const API_BASE = "http://localhost:5000/api";

export const todoApi = {
  getTasks: async (): Promise<Task[]> => {
    const response = await fetch(`${API_BASE}/tasks`);
    return response.json();
  },

  createTask: async (text: string): Promise<Task> => {
    const response = await fetch(`${API_BASE}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    return response.json();
  },

  updateTask: async (id: number, updates: Partial<Task>): Promise<Task> => {
    const response = await fetch(`${API_BASE}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    return response.json();
  },

  deleteTask: async (id: number): Promise<void> => {
    await fetch(`${API_BASE}/tasks/${id}`, {
      method: "DELETE",
    });
  },
};
