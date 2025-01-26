import { Department } from './department';

export interface User {
  id: string;
  name: string;
  department: Department;
  role: string;
}

export type UserInfo = Pick<User, 'id' | 'name'>;
