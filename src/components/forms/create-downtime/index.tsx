'use client';

import { useForm } from 'react-hook-form';

import { createDowntimeDefaultValues, createDowntimeSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { DowntimeServices } from '@/services/features/downtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type CreateDowntimeFormValues = z.infer<typeof createDowntimeSchema>;

export interface CreateDowntimeFormProps {
  setOpen: (value: boolean) => void;
}

export const CreateDowntimeForm = ({ setOpen }: CreateDowntimeFormProps) => {
  const form = useForm<CreateDowntimeFormValues>({
    resolver: zodResolver(createDowntimeSchema),
    defaultValues: createDowntimeDefaultValues,
    mode: 'onBlur'
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: CreateDowntimeFormValues) => {
    submitRequest('success', 'Baja creada correctamente', async () => {
      await DowntimeServices.create(values);
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
          description="Usuario creador de la baja"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver"
          label="Receptor"
          description="Usuario que recibe el equipo dado de baja"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipo"
          description="Equipo dado de baja"
          options={equipments.map(({ name, id }) => {
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
          description="Estado de la baja"
          placeholder="Activo"
        />
        <RHFInput
          name="cause"
          label="Causa"
          description="Causa de la baja"
          placeholder="Falla técnica"
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Crear</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
