import { Department } from './department';
import { Role } from './role';

export interface User {
  id: string;
  name: string;
  department: Department;
  role: Role;
}

export type UserInfo = Pick<User, 'id' | 'name'>;
