import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  password: z.string().min(1, { message: 'La contraseña no puede ser vacía' }),
  id_department: z.string().min(1, { message: 'El usuario debe pertenecer a un departamento' }),
  id_role: z.string().min(1, { message: 'Los usuarios deben tener alguno de los roles' })
});

export const createUserDefaultValues = {
  name: '',
  id_department: '',
  id_role: ''
};
