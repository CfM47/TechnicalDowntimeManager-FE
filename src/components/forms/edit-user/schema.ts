import { Roles } from '@/lib/enums';
import { z } from 'zod';

const role = z.enum(Roles, { message: 'Los usuarios deben tener alguno de los roles' });

export const editUserSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  id_department: z.string().min(1, { message: 'El usuario debe pertenecer a un departamento' }),
  role
});

export const UserDefaultValues = {
  name: '',
  id_department: '',
  role: ''
};
