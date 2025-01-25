'use client';

import { useForm } from 'react-hook-form';

import { createMaintenanceDefaultValues, createMaintenanceSchema } from './schema';

import { RHFNumericInput } from '@/components/rhf/rhf-numeric-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useRefreshPage } from '@/hooks/useRefreshPage';
import { MaintenanceServices } from '@/services/features/maintenance';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type CreateMaintenanceFormValues = z.infer<typeof createMaintenanceSchema>;

export interface CreateMaintenanceFormProps {
  setOpen: (value: boolean) => void;
}

export const CreateMaintenanceForm = ({ setOpen }: CreateMaintenanceFormProps) => {
  const form = useForm<CreateMaintenanceFormValues>({
    resolver: zodResolver(createMaintenanceSchema),
    defaultValues: createMaintenanceDefaultValues,
    mode: 'onBlur'
  });

  const { submitRequest } = useRefreshPage();
  const onSubmit = async (values: CreateMaintenanceFormValues) => {
    submitRequest('success', 'Mantenimiento creado correctamente', async () => {
      await MaintenanceServices.create(values);
      setOpen(false);
    });
  };

  const { equipments, technicians } = useFetchOptions({
    selectFrom: ['EQUIPMENT', 'TECHNICIAN']
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFSelect
          name="id_technician"
          label="Técnico"
          description="Técnico encargado del mantenimiento"
          options={technicians.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipo"
          description="Equipo que recibe el mantenimiento"
          options={equipments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="type"
          label="Tipo de Mantenimiento"
          description="Tipo de mantenimiento realizado"
          options={[
            { label: 'Preventivo', value: 'Preventivo' },
            { label: 'Correctivo', value: 'Correctivo' },
            { label: 'Predictivo', value: 'Predictivo' }
          ]}
        />
        <RHFNumericInput
          name="cost"
          label="Costo"
          description="Costo del mantenimiento"
          placeholder="100"
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
