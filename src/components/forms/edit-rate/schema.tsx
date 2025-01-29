import { z } from 'zod';

export const editRateSchema = z.object({
  id_technician: z.string().uuid({ message: 'Choose an evaluator' }),
  id_user: z.string().uuid({ message: 'Choose a technician to evaluate' }),
  comment: z.string().min(1, { message: 'Write a description' }),
  score: z.number().int().min(1).max(5, { message: 'Rate must be between 1-5' })
});

export const RateDefaultValues = {
  id_technician: '',
  id_user: '',
  comment: '',
  score: 1
};
