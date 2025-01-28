import { User } from './user';

/**
 * Represents a technician with additional properties extending from the User interface.
 *
 * @extends User
 *
 * @property {number} exp_years - The number of years of experience the technician has.
 * @property {string} specialty - The specialty or area of expertise of the technician.
 */
export interface Technician extends User {
  exp_years: number;
  specialty: string;
}

/**
 * Represents a query for searching technicians.
 *
 * @property {string} [id_user] - The unique identifier of the user.
 * @property {number} [exp_years] - The number of years of experience the technician has.
 * @property {string} [specialty] - The specialty or area of expertise of the technician.
 */
export type TechnicianQuery = {
  id_user?: string;
  exp_years?: number;
  specialty?: string;
};

/**
 * Represents a subset of the Technician type containing only the 'id' and 'name' properties.
 */
export type TechnicianInfo = Pick<Technician, 'id' | 'name'>;
