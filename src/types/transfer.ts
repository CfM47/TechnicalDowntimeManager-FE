import { Department } from './department';
import { EquipmentInfo } from './equipment';
import { UserInfo } from './user';

export interface Transfer {
  sender: UserInfo;
  receiver: UserInfo;
  equipment: EquipmentInfo;
  date: string;
  origin_dep: Department;
  receiver_dep: Department;
  status: string;
}
