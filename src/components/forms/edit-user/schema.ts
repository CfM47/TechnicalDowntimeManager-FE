import { Roles } from '@/lib/enums';
import { z } from 'zod';

const role = z.enum(Roles, { message: 'Users must have a role' });

export const editUserSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  id_department: z.string().min(1, { message: 'User must belong to a department' }),
  role
});

export const UserDefaultValues = {
  name: '',
  id_department: '',
  role: ''
};
