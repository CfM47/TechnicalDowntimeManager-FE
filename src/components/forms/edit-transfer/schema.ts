import { TransferStatuses } from '@/lib/enums';
import { z } from 'zod';

const status = z.enum(TransferStatuses);

export const editTransferSchema = z.object({
  id_sender: z.string().uuid({ message: 'Debe escoger un remitente válido' }),
  id_receiver: z.string().uuid({ message: 'Debe escoger un receptor válido' }),
  id_equipment: z.string().uuid({ message: 'Debe escoger un equipo válido' }),
  id_receiver_dep: z.string().uuid({ message: 'Debe escoger un departamento receptor válido' }),
  status: status
});

export const TransferDefaultValues = {
  id_sender: '',
  id_receiver: '',
  id_equipment: '',
  id_receiver_dep: '',
  status: ''
};
