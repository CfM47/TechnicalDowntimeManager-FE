import { z } from 'zod';

export const signinSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  password: z.string().min(1, { message: 'Password cannot be empty' })
});

export const signinDefaultValues = {
  name: '',
  password: ''
};
