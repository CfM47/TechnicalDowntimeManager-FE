import { create } from 'zustand';

interface SessionState {
  token: string | null;
  role: string;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
}

const useSessionStore = create<SessionState>()((set) => ({
  token: localStorage.getItem('token'),
  role: '',
  setToken: (token: string) => set({ token }),
  setRole: (role: string) => set({ role })
}));

export default useSessionStore;
