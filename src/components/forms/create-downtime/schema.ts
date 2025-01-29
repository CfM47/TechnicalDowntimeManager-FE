import { DowntimeStatuses } from '@/lib/enums';
import { z } from 'zod';

const status = z.enum(DowntimeStatuses);

export const createDowntimeSchema = z.object({
  id_sender: z.string().uuid({ message: 'Choose a valid sender' }),
  id_receiver: z.string().uuid({ message: 'Choose a valid receiver' }),
  id_equipment: z.string().uuid({ message: 'Choose a valid equipment' }),
  id_dep_receiver: z.string().uuid({ message: 'Choose a valid receiver department' }),
  status: status,
  cause: z.string().min(1, { message: 'Cause it is necessary' })
});

export const createDowntimeDefaultValues = {
  id_sender: '',
  id_receiver: '',
  id_equipment: '',
  id_dep_receiver: '',
  status: '',
  cause: ''
};
