import { Role } from './enums';

export const SCREEN_SIZES = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

export const authorizedRolesByRoute = {
  transfers: [Role.admin, Role.sectionLeader],
  downtimes: [Role.admin, Role.sectionLeader],
  maintenances: [Role.admin, Role.sectionLeader, Role.technician],
  rate: [Role.admin, Role.sectionLeader],
  user: [Role.admin],
  equipment: [Role.admin, Role.sectionLeader, Role.technician],
  reports: [Role.admin]
};
