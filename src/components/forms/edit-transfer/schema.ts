import { TransferStatuses } from '@/lib/enums';
import { z } from 'zod';

const status = z.enum(TransferStatuses);

export const editTransferSchema = z.object({
  id_sender: z.string().uuid({ message: 'Choose a sender' }),
  id_receiver: z.string().uuid({ message: 'Choose a receiver' }),
  id_equipment: z.string().uuid({ message: 'Choose a valid equipment' }),
  id_receiver_dep: z.string().uuid({ message: 'Choose a valid receiver department' }),
  status: status
});

export const TransferDefaultValues = {
  id_sender: '',
  id_receiver: '',
  id_equipment: '',
  id_receiver_dep: '',
  status: ''
};
