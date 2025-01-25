'use client';

import { useForm } from 'react-hook-form';

import { DowntimeDefaultValues, editDowntimeSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { DowntimeServices } from '@/services/features/downtime';
import { Downtime } from '@/types/downtime';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditDowntimeFormValues = z.infer<typeof editDowntimeSchema>;

export interface EditDowntimeFormProps {
  setOpen: (value: boolean) => void;
  item: Downtime;
}

export const EditDowntimeForm = ({ setOpen, item }: EditDowntimeFormProps) => {
  const downtimeData = {
    id_sender: item.sender.id,
    id_receiver: item.receiver.id,
    id_equipment: item.equipment.id,
    id_dep_receiver: item.dep_receiver.id,
    status: item.status,
    cause: item.cause
  };

  const form = useForm<EditDowntimeFormValues>({
    resolver: zodResolver(editDowntimeSchema),
    defaultValues: { ...DowntimeDefaultValues, ...downtimeData },
    mode: 'onBlur'
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: EditDowntimeFormValues) => {
    submitRequest('success', 'Baja actualizada correctamente', async () => {
      await DowntimeServices.update(
        item.sender.id,
        item.receiver.id,
        item.equipment.id,
        item.date,
        item.dep_receiver.id,
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
        <RHFSelect
          name="status"
          label="Estado"
          description="Estado de la baja"
          options={[
            { label: 'Pendiente de evaluación', value: 'Pendiente de evaluación' },
            { label: 'Retirado del servicio', value: 'Retirado del servicio' },
            { label: 'Reutilizado', value: 'Reutilizado' },
            { label: 'Baja Definitiva', value: 'Baja Definitiva' }
          ]}
        />
        <RHFInput
          name="cause"
          label="Causa"
          description="Causa de la baja"
          placeholder="Falla técnica"
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Guardar</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
