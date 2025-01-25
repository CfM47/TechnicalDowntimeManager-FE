import { Department } from './department';

export interface Equipment {
  id: string;
  name: string;
  type: string;
  status: string;
  department: Department;
  acquisition_date: string;
}

export type EquipmentInfo = Pick<Equipment, 'id' | 'name'>;
