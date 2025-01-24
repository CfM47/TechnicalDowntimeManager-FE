'use client';

import { useForm } from 'react-hook-form';

import { editTransferSchema, TransferDefaultValues } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { toastRequest } from '@/lib/utils';
import { TransferServices } from '@/services/features/transfer';
import { Transfer } from '@/types/transfer';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditTransferFormValues = z.infer<typeof editTransferSchema>;

export interface EditTransferFormProps {
  setOpen: (value: boolean) => void;
  item: Transfer;
}

export const EditTransferForm = ({ setOpen, item }: EditTransferFormProps) => {
  const transferData = {
    id_sender: item.sender.id,
    id_receiver: item.receiver.id,
    id_equipment: item.equipment.id,
    id_dep_origin: item.origin_dep.id,
    id_dep_receiver: item.receiver_dep.id,
    status: item.status
  };

  const form = useForm<EditTransferFormValues>({
    resolver: zodResolver(editTransferSchema),
    defaultValues: { ...TransferDefaultValues, ...transferData },
    mode: 'onBlur'
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: EditTransferFormValues) => {
    toastRequest('success', 'Traslado actualizado correctamente', async () => {
      await TransferServices.update(
        item.sender.id,
        item.receiver.id,
        item.equipment.id,
        item.date,
        item.origin_dep.id,
        item.receiver_dep.id,
        values
      );
      setOpen(false);
    });
  };

  const { departments, equipments, users } = useFetchOptions({
    selectFrom: ['DEPARTMENT', 'EQUIPMENT', 'USER']
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFSelect
          name="id_sender"
          label="Remitente"
          description="Usuario creador del traslado"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver"
          label="Receptor"
          description="Usuario que recibe el equipo del traslado"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipo"
          description="Equipo trasladado"
          options={equipments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_origin_dep"
          label="Departamento de Origen"
          description="Departamento que envía el equipo"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver_dep"
          label="Departamento Receptor"
          description="Departamento que recibe el equipo"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFInput
          name="downtime_status"
          label="Estado"
          description="Estado del traslado"
          placeholder="estado"
        />

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button type="submit" variant="default">
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
};
