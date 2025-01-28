import { Department } from './department';
import { EquipmentInfo } from './equipment';
import { UserInfo } from './user';

import { QueryParams } from '@/services/routes/types';

/**
 * Represents a downtime event in the system.
 */
export interface Downtime {
  /**
   * Information about the user who reported the downtime.
   */
  sender: UserInfo;

  /**
   * Information about the user who received the downtime report.
   */
  receiver: UserInfo;

  /**
   * Information about the equipment involved in the downtime.
   */
  equipment: EquipmentInfo;

  /**
   * The date when the downtime occurred.
   * Format: YYYY-MM-DD
   */
  date: string;

  /**
   * The department of the receiver.
   */
  dep_receiver: Department;

  /**
   * The current status of the downtime.
   */
  status: string;

  /**
   * The cause of the downtime.
   */
  cause: string;
}

/**
 * Represents the query parameters for a downtime request.
 * Extends the `QueryParams` interface.
 *
 * @interface DowntimeQuery
 *
 * @property {string} [id_sender] - The ID of the sender.
 * @property {string} [id_receiver] - The ID of the receiver.
 * @property {string} [id_equipment] - The ID of the equipment.
 * @property {string} [date] - The date of the downtime.
 * @property {string} [id_dep_receiver] - The ID of the department receiver.
 * @property {string} [status] - The status of the downtime.
 * @property {string} [cause] - The cause of the downtime.
 */
export interface DowntimeQuery extends QueryParams {
  id_sender?: string;
  id_receiver?: string;
  id_equipment?: string;
  date?: string;
  id_dep_receiver?: string;
  status?: string;
  cause?: string;
}
