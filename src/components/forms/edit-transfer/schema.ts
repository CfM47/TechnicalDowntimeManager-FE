import { z } from 'zod';

export const editTransferSchema = z.object({
  id_sender: z.string().uuid({ message: 'Debe escoger un remitente válido' }),
  id_receiver: z.string().uuid({ message: 'Debe escoger un receptor válido' }),
  id_equipment: z.string().uuid({ message: 'Debe escoger un equipo válido' }),
  id_dep_origin: z.string().uuid({ message: 'Debe escoger un departamento de origen válido' }),
  id_dep_receiver: z.string().uuid({ message: 'Debe escoger un departamento receptor válido' }),
  status: z.string().min(1, { message: 'El estado es obligatorio' })
});

export const TransferDefaultValues = {
  id_sender: '',
  id_receiver: '',
  id_equipment: '',
  id_dep_origin: '',
  id_dep_receiver: '',
  status: ''
};
