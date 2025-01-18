import { Department } from './department';

export interface Equipment {
  id: string;
  name: string;
  type: string;
  state: string;
  department: Department;
  acquisition_date: string;
}

export type EquipmentInfo = Pick<Equipment, 'id' | 'name'>;
