'use client';

import { useForm } from 'react-hook-form';

import { createMaintenanceDefaultValues, createMaintenanceSchema } from './schema';

import { RHFNumericInput } from '@/components/rhf/rhf-numeric-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { MaintenanceTypes } from '@/lib/enums';
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

  const { submitRequest, isSubmitting } = useFormSubmit();
  const onSubmit = async (values: CreateMaintenanceFormValues) => {
    submitRequest('Maintenance created successfully', 'Maintenance wasn´t created', async () => {
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
          label="Technician"
          description="Technician in charge of maintenance"
          options={technicians.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipment"
          description="Equipment receiving maintenance"
          options={equipments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="type"
          label="Maintenance type"
          description="Type of maintenance performed"
          options={MaintenanceTypes.map((x) => ({ label: x, value: x }))}
        />
        <RHFNumericInput
          name="cost"
          label="Cost"
          description="Maintenance cost"
          placeholder="100"
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Create</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
