import { User } from './user';

export interface Technician extends User {
  exp_years: number;
  specialty: string;
}

export type TechnicianInfo = Pick<Technician, 'id' | 'name'>;
