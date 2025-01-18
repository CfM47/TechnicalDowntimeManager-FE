import { z } from 'zod';

export const editUserSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  id_department: z.string().min(1, { message: 'El usuario debe pertenecer a un departamento' }),
  id_role: z.string().min(1, { message: 'Los usuarios deben tener alguno de los roles' })
});

export const UserDefaultValues = {
  name: '',
  id_department: '',
  id_role: ''
};
