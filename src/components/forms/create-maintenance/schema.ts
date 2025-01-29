import { MaintenanceTypes } from '@/lib/enums';
import { z } from 'zod';

const maintenanceType = z.enum(MaintenanceTypes);

export const createMaintenanceSchema = z.object({
  id_technician: z.string().uuid({ message: 'Choose a technician' }),
  id_equipment: z.string().uuid({ message: 'Choose an equipment' }),
  type: maintenanceType,
  cost: z.number().min(0, { message: 'Cost must be greater or equal to zero' })
});

export const createMaintenanceDefaultValues = {
  id_technician: '',
  id_equipment: '',
  type: '',
  cost: 0
};
