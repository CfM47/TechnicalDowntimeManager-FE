import { MaintenanceTypes } from '@/lib/enums';
import { z } from 'zod';

const type = z.enum(MaintenanceTypes);
export const editMaintenanceSchema = z.object({
  id_technician: z.string().uuid({ message: 'Se debe seleccionar un técnico' }),
  id_equipment: z.string().uuid({ message: 'Se debe seleccionar un equipo' }),
  type: type,
  cost: z.number().positive({ message: 'El costo debe ser mayor o igual a 0' })
});

export const editMaintenanceDefaultValues = {
  id_technician: '',
  id_equipment: '',
  type: '',
  cost: 0
};
