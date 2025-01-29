import { EquipmentStatuses, EquipmentTypes } from '@/lib/enums';
import { z } from 'zod';

const type = z.enum(EquipmentTypes);
const status = z.enum(EquipmentStatuses);
export const createEquipmentSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  type: type,
  status: status,
  id_department: z.string().min(1, { message: 'The equipment must be a part of a department' })
});

export const createEquipmentDefaultValues = {
  name: '',
  type: '',
  status: '',
  id_department: ''
};
