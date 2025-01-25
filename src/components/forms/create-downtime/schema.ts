import { z } from 'zod';

const downtimeType = z.enum([
  'Pendiente de evaluación',
  'Retirado del servicio',
  'Reutilizado',
  'Baja Definitiva'
]);
export const createDowntimeSchema = z.object({
  id_sender: z.string().uuid({ message: 'Debe escoger un remitente válido' }),
  id_receiver: z.string().uuid({ message: 'Debe escoger un receptor válido' }),
  id_equipment: z.string().uuid({ message: 'Debe escoger un equipo válido' }),
  id_dep_receiver: z.string().uuid({ message: 'Debe escoger un departamento receptor válido' }),
  status: downtimeType,
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
