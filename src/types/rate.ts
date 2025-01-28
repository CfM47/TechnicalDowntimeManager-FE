import { TechnicianInfo } from './technician';
import { UserInfo } from './user';

/**
 * Represents a rate given by a user to a technician.
 *
 * @property {TechnicianInfo} technician - Information about the technician being rated.
 * @property {UserInfo} user - Information about the user who is giving the rate.
 * @property {string} date - The date when the rate was given, in ISO 8601 format.
 * @property {string} comment - A comment provided by the user about the technician.
 * @property {number} score - The score given by the user, typically on a predefined scale (e.g., 1 to 5).
 */
export interface Rate {
  technician: TechnicianInfo;
  user: UserInfo;
  date: string;
  comment: string;
  score: number;
}

/**
 * Represents a query for rates.
 *
 * @property {string} [id_technician] - The ID of the technician.
 * @property {string} [id_user] - The ID of the user.
 * @property {string} [date] - The date of the rate.
 * @property {string} [comment] - The comment associated with the rate.
 * @property {number} [score] - The score of the rate.
 */
export type RateQuery = {
  id_technician?: string;
  id_user?: string;
  date?: string;
  comment?: string;
  score?: number;
};
