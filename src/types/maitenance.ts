import { EquipmentInfo } from './equipment';
import { TechnicianInfo } from './technician';

/**
 * Represents a maintenance record.
 *
 * @interface Maintenance
 * @property {TechnicianInfo} technician - Information about the technician performing the maintenance.
 * @property {EquipmentInfo} equipment - Information about the equipment being maintained.
 * @property {string} date - The date when the maintenance was performed.
 * @property {string} type - The type of maintenance performed.
 * @property {number} cost - The cost of the maintenance.
 */
export interface Maintenance {
  technician: TechnicianInfo;
  equipment: EquipmentInfo;
  date: string;
  type: string;
  cost: number;
}

/**
 * Represents a query for maintenance records.
 *
 * @property {string} [id_technician] - The ID of the technician performing the maintenance.
 * @property {string} [id_equipment] - The ID of the equipment being maintained.
 * @property {string} [date] - The date of the maintenance.
 * @property {string} [type] - The type of maintenance performed.
 * @property {number} [cost] - The cost of the maintenance.
 */
export type MaintenanceQuery = {
  id_technician?: string;
  id_equipment?: string;
  date?: string;
  type?: string;
  cost?: number;
};
