import { z } from 'zod';

export const editRateSchema = z.object({
  id_technician: z.string().uuid({ message: 'Seleccione quién emite la valoración' }),
  id_user: z.string().uuid({ message: 'Debe escoger a quién valorar' }),
  comment: z.string().min(1, { message: 'Escriba una descripción de la valoración' }),
  score: z.number().int().min(1).max(5, { message: 'La puntuación debe ser un número entre 1 y 5' })
});

export const RateDefaultValues = {
  id_technician: '',
  id_user: '',
  comment: '',
  score: 1
};
