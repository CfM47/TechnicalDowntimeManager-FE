import { MaintenanceTypes } from '@/lib/enums';
import { z } from 'zod';

const type = z.enum(MaintenanceTypes);
export const editMaintenanceSchema = z.object({
  id_technician: z.string().uuid({ message: 'Choose a technician' }),
  id_equipment: z.string().uuid({ message: 'Choose an equipment' }),
  type: type,
  cost: z.number().min(0, { message: 'Cost must be greater or equal to zero' })
});

export const editMaintenanceDefaultValues = {
  id_technician: '',
  id_equipment: '',
  type: '',
  cost: 0
};
