import { User } from './user';

import { PaginationQuery, QueryParams } from '@/services/routes/types';

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
export interface TechnicianQuery extends QueryParams, PaginationQuery {
  id_user?: string;
  exp_years?: number;
  specialty?: string;
}

/**
 * Represents a subset of the Technician type containing only the 'id' and 'name' properties.
 */
export type TechnicianInfo = Pick<Technician, 'id' | 'name'>;

/**
 * Represents the performance metrics of a technician.
 *
 * @property {string} id - The unique identifier of the technician.
 * @property {string} name - The name of the technician.
 * @property {number} score_avg - The average score of the technician based on ratings.
 * @property {number} total_rates - The total number of ratings received by the technician.
 * @property {number} total_maintenances - The total number of maintenances performed by the technician.
 */
export interface TechnicianPerformanceType {
  id: string;
  name: string;
  score_avg: number;
  total_rates: number;
  total_maintenances: number;
}
