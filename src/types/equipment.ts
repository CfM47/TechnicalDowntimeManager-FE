import { Department } from './department';

import { PaginationQuery, QueryParams } from '@/services/routes/types';

/**
 * Represents an equipment item.
 */
export interface Equipment {
  /**
   * Unique identifier for the equipment.
   */
  id: string;

  /**
   * Name of the equipment.
   */
  name: string;

  /**
   * Type or category of the equipment.
   */
  type: string;

  /**
   * Current status of the equipment (e.g., operational, under maintenance).
   */
  status: string;

  /**
   * Department to which the equipment belongs.
   */
  department: Department;

  /**
   * Date when the equipment was acquired.
   */
  acquisition_date: string;
}

/**
 * Represents and equipment with the total maintenances performed on it
 */
export interface EquipmentMaintenancesCount extends Equipment {
  totalMaintenances: number;
}

/**
 * Represents a query for equipment.
 *
 * @property {string} [id] - The unique identifier of the equipment.
 * @property {string} [name] - The name of the equipment.
 * @property {string} [type] - The type or category of the equipment.
 * @property {string} [status] - The current state or condition of the equipment.
 * @property {string} [id_department] - The identifier of the department to which the equipment belongs.
 * @property {string} [acquisition_date] - The date when the equipment was acquired.
 */
export interface EquipmentQuery extends QueryParams, PaginationQuery {
  id?: string;
  name?: string;
  type?: string;
  status?: string;
  id_department?: string;
  acquisition_date?: string;
}

/**
 * Represents a subset of the Equipment type containing only the 'id' and 'name' properties.
 */
export type EquipmentInfo = Pick<Equipment, 'id' | 'name'>;
