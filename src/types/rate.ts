import { TechnicianInfo } from './technician';
import { UserInfo } from './user';

export interface Rate {
  technician: TechnicianInfo;
  user: UserInfo;
  date: string;
  comment: string;
  score: number;
}
