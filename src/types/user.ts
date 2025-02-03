import { Department } from './department';
import { Role } from './role';

import { QueryParams } from '@/services/routes/types';

/**
 * Represents a user in the system.
 */
export interface User {
  /**
   * The unique identifier of the user.
   */
  id: string;

  /**
   * The name of the user.
   */
  name: string;

  /**
   * The department to which the user belongs.
   */
  department: Department;

  /**
   * The role of the user within the department.
   */
  role: Role;
}

/**
 * Represents the query parameters for fetching user data.
 * Extends the base query parameters with additional user-specific fields.
 *
 * @extends QueryParams
 *
 * @property {string} [id] - The unique identifier of the user.
 * @property {string} [name] - The name of the user.
 * @property {string} [id_department] - The identifier of the department the user belongs to.
 * @property {string} [role] - The role of the user within the organization.
 */
export interface UserQuery extends QueryParams {
  id?: string;
  name?: string;
  id_department?: string;
  id_role?: number;
}

/**
 * Represents a subset of the User type containing only the 'id' and 'name' properties.
 */
export type UserInfo = Pick<User, 'id' | 'name'>;
