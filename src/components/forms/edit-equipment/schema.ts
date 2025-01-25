import { z } from 'zod';

const equipmentState = z.enum(['Operativo', 'Mantenimiento', 'Baja']);
const equipmentType = z.enum([
  'Informático',
  'Comunicaciones',
  'Electrónico',
  'Seguridad',
  'Oficina'
]);
export const editEquipmentSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  type: equipmentType,
  state: equipmentState,
  id_department: z.string().min(1, { message: 'El equipo debe pertenecer a un departamento' })
});

export const EquipmentDefaultValues = {
  name: '',
  type: '',
  state: '',
  id_department: ''
};
