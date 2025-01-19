import { z } from 'zod';

export const createEquipmentSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  type: z.string().min(1, { message: 'El equipo debe tener un tipo asignado' }),
  state: z.string().min(1, { message: 'Se debe especificar el estado del equipo' }),
  id_department: z.string().min(1, { message: 'El equipo debe pertenecer a un departamento' })
});

export const createEquipmentDefaultValues = {
  name: '',
  type: '',
  state: '',
  id_department: ''
};
