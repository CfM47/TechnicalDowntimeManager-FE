import { Department } from './department';
import { EquipmentInfo } from './equipment';
import { UserInfo } from './user';

/**
 * Represents a transfer of equipment from one user to another.
 *
 * @interface Transfer
 * @property {UserInfo} sender - Information about the user sending the equipment.
 * @property {UserInfo} receiver - Information about the user receiving the equipment.
 * @property {EquipmentInfo} equipment - Information about the equipment being transferred.
 * @property {string} date - The date when the transfer takes place.
 * @property {Department} origin_dep - The department from which the equipment is being sent.
 * @property {Department} receiver_dep - The department to which the equipment is being sent.
 * @property {string} status - The current status of the transfer.
 */
export interface Transfer {
  sender: UserInfo;
  receiver: UserInfo;
  equipment: EquipmentInfo;
  date: string;
  origin_dep: Department;
  receiver_dep: Department;
  status: string;
}

/**
 * Represents a query for transferring items between entities.
 *
 * @property {string} [id_sender] - The ID of the sender.
 * @property {string} [id_receiver] - The ID of the receiver.
 * @property {string} [id_equipment] - The ID of the equipment being transferred.
 * @property {string} [date] - The date of the transfer.
 * @property {string} [id_origin_dep] - The ID of the origin department.
 * @property {string} [id_receiver_dep] - The ID of the receiver department.
 * @property {string} [status] - The status of the transfer.
 */
export type TransferQuery = {
  id_sender?: string;
  id_receiver?: string;
  id_equipment?: string;
  date?: string;
  id_origin_dep?: string;
  id_receiver_dep?: string;
  status?: string;
};
