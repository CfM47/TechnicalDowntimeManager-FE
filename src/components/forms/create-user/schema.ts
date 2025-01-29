import { Role, Roles } from '@/lib/enums';
import { z } from 'zod';

const role = z
  .enum(Roles.filter((x) => x !== Role.technician) as [string, ...string[]], {
    message: 'Users must have a role'
  })
  .optional();

export const createUserSchema = z
  .object({
    name: z.string().min(1, { message: 'Name cannot be empty' }),
    password: z.string().min(1, { message: 'Password cannot be empty' }),
    id_department: z.string().min(1, { message: 'User must belong to a department' }),
    role,
    isTechnician: z.boolean(),
    exp_years: z
      .number()
      .int()
      .positive({ message: 'The experience years must be a positive number' })
      .optional(),
    specialty: z.string().optional()
  })
  .superRefine((data, ctx) => {
    if (data.isTechnician) {
      if (data.exp_years === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['exp_years'],
          message: 'Experience years are required for technicians'
        });
      }
      if (!data.specialty || !data.specialty.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['specialty'],
          message: 'Specialty is required for technicians'
        });
      }
    }
  });

export const createUserDefaultValues = {
  name: '',
  password: '',
  id_department: '',
  role: undefined,
  isTechnician: false,
  exp_years: 0,
  specialty: ''
};
