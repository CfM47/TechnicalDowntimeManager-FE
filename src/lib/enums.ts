export const DowntimeStatuses: [string, ...string[]] = [
  'Pendiente de evaluación',
  'Retirado del servicio',
  'Reutilizado',
  'Baja Definitiva'
];

export const EquipmentStatuses: [string, ...string[]] = ['Operativo', 'Mantenimiento', 'Baja'];

export const EquipmentTypes: [string, ...string[]] = [
  'Informático',
  'Comunicaciones',
  'Electrónico',
  'Seguridad',
  'Oficina'
];

export const TransferStatuses: [string, ...string[]] = [
  'Pendiente',
  'Completado',
  'Aprobado',
  'Cancelado'
];

export const MaintenanceTypes: [string, ...string[]] = ['Preventivo', 'Correctivo', 'Predictivo'];

export enum Role {
  admin = 'Administrador',
  technician = 'Técnico',
  sectionLeader = 'Jefe de sección'
}

export const Roles: [string, ...string[]] = [Role.admin, Role.technician, Role.sectionLeader];
