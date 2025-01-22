'use client';

import { create } from 'zustand';

interface SessionState {
  name: string | null;
  token: string | null;
  role: string | null;
  setName: (name: string) => void;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
}

const useSessionStore = create<SessionState>()((set) => ({
  name: localStorage.getItem('name'),
  token: localStorage.getItem('token'),
  role: localStorage.getItem('role'),
  setName: (name: string) => {
    localStorage.setItem('name', name);
    set({ name });
  },
  setToken: (token: string) => {
    localStorage.setItem('token', token);
    set({ token });
  },
  setRole: (role: string) => {
    localStorage.setItem('role', role);
    set({ role });
  },
  clear: () => {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    set({ name: null, token: null, role: null });
  }
}));

export default useSessionStore;
