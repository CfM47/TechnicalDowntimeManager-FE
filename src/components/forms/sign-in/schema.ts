import { z } from 'zod';

export const signinSchema = z.object({
  name: z.string().min(1, { message: 'El nombre no puede ser vacío' }),
  password: z.string().min(1, { message: 'La contraseña no puede ser vacía' })
});

export const signinDefaultValues = {
  name: '',
  password: ''
};
