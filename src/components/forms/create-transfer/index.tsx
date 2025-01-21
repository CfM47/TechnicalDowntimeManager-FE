'use client';

import { useForm } from 'react-hook-form';

import { createTransferDefaultValues, createTransferSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { TransferServices } from '@/services/features/transfer';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type CreateTransferFormValues = z.infer<typeof createTransferSchema>;

export interface CreateTransferFormProps {
  setOpen: (value: boolean) => void;
}

export const CreateTransferForm = ({ setOpen }: CreateTransferFormProps) => {
  const form = useForm<CreateTransferFormValues>({
    resolver: zodResolver(createTransferSchema),
    defaultValues: createTransferDefaultValues,
    mode: 'onBlur'
  });

  const onSubmit = async (values: CreateTransferFormValues) => {
    await TransferServices.create(values);
    setOpen(false);
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
          name="id_dep_origin"
          label="Departamento de Origen"
          description="Departamento que envía el equipo"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_dep_receiver"
          label="Departamento Receptor"
          description="Departamento que recibe el equipo"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFInput
          name="status"
          label="Estado"
          description="Estado del traslado"
          placeholder="estado"
        />

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button type="submit" variant="default">
            Crear
          </Button>
        </div>
      </form>
    </Form>
  );
};
