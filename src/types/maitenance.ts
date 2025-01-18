import { EquipmentInfo } from './equipment';
import { TechnicianInfo } from './technician';

export interface Maintenance {
  technician: TechnicianInfo;
  equipment: EquipmentInfo;
  date: string;
  type: string;
  cost: number;
}
