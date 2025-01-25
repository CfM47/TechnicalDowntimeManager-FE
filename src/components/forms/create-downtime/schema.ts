import { DowntimeStatuses } from '@/lib/enums';
import { z } from 'zod';

const status = z.enum(DowntimeStatuses);

export const createDowntimeSchema = z.object({
  id_sender: z.string().uuid({ message: 'Debe escoger un remitente válido' }),
  id_receiver: z.string().uuid({ message: 'Debe escoger un receptor válido' }),
  id_equipment: z.string().uuid({ message: 'Debe escoger un equipo válido' }),
  id_dep_receiver: z.string().uuid({ message: 'Debe escoger un departamento receptor válido' }),
  status: status,
  cause: z.string().min(1, { message: 'La causa es obligatoria' })
});

export const createDowntimeDefaultValues = {
  id_sender: '',
  id_receiver: '',
  id_equipment: '',
  id_dep_receiver: '',
  status: '',
  cause: ''
};
