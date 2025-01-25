import { EquipmentStatuses, EquipmentTypes } from '@/lib/enums';
import { z } from 'zod';

const type = z.enum(EquipmentTypes);
const status = z.enum(EquipmentStatuses);
export const createEquipmentSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  type: type,
  status: status,
  id_department: z.string().min(1, { message: 'El equipo debe pertenecer a un departamento' })
});

export const createEquipmentDefaultValues = {
  name: '',
  type: '',
  status: '',
  id_department: ''
};
