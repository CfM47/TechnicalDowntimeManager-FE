import { EquipmentStatuses } from '@/lib/enums';
import { z } from 'zod';

const state = z.enum(EquipmentStatuses);
const type = z.enum(EquipmentStatuses);

export const editEquipmentSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  type: type,
  state: state
});

export const EquipmentDefaultValues = {
  name: '',
  type: '',
  state: ''
};
