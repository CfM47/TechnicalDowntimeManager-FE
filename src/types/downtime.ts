import { Department } from './department';
import { EquipmentInfo } from './equipment';
import { UserInfo } from './user';

export interface Downtime {
  sender: UserInfo;
  receiver: UserInfo;
  equipment: EquipmentInfo;
  date: string;
  dep_receiver: Department;
  status: string;
  cause: string;
}
