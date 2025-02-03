'use client';

import { getToken, removeToken, setToken } from '@/lib/cookies';
import { create } from 'zustand';

interface SessionState {
  name: string | null;
  token: string | null;
  setName: (name: string) => void;
  setToken: (token: string) => void;
  clear: () => void;
}

const useSessionStore = create<SessionState>()((set) => ({
  name: localStorage.getItem('name'),
  token: getToken(),
  setName: (name: string) => {
    localStorage.setItem('name', name);
    set({ name });
  },
  setToken: (token: string) => {
    setToken(token);
    set({ token });
  },
  clear: () => {
    localStorage.removeItem('name');
    removeToken();
    set({ name: null, token: null });
  }
}));

export default useSessionStore;
