import { z } from 'zod';

export const editMaintenanceSchema = z.object({
  id_technician: z.string().uuid({ message: 'Se debe seleccionar un técnico' }),
  id_equipment: z.string().uuid({ message: 'Se debe seleccionar un equipo' }),
  type: z.string().min(1, { message: 'Debe contener un tipo de mantenimiento' }),
  cost: z.number().positive({ message: 'El costo debe ser mayor o igual a 0' })
});

export const editMaintenanceDefaultValues = {
  id_technician: '',
  id_equipment: '',
  type: '',
  cost: 0
};
