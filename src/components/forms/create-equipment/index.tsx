'use client';

import { useForm } from 'react-hook-form';

import { createEquipmentDefaultValues, createEquipmentSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { EquipmentStatuses, EquipmentTypes } from '@/lib/enums';
import { EquipmentServices } from '@/services/features/equipment';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type CreateEquipmentFormValues = z.infer<typeof createEquipmentSchema>;

export interface CreateEquipmentFormProps {
  setOpen: (value: boolean) => void;
}

export const CreateEquipmentForm = ({ setOpen }: CreateEquipmentFormProps) => {
  const form = useForm<CreateEquipmentFormValues>({
    resolver: zodResolver(createEquipmentSchema),
    defaultValues: createEquipmentDefaultValues
  });

  const { submitRequest, isSubmitting } = useFormSubmit();

  const onSubmit = async (values: CreateEquipmentFormValues) => {
    submitRequest('success', 'Equipo creado correctamente', async () => {
      await EquipmentServices.create(values);
      setOpen(false);
    });
  };

  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput name="name" label="Nombre" description="Nombre de equipo" placeholder="equipo" />

        <RHFSelect
          name="type"
          label="tipo"
          description="Tipo de equipo"
          options={EquipmentTypes.map((x) => ({ label: x, value: x }))}
        />

        <RHFSelect
          name="status"
          label="Estado"
          description="Estado del equipo"
          options={EquipmentStatuses.map((x) => ({ label: x, value: x }))}
        />
        <RHFSelect
          name="id_department"
          label="Departamento"
          description="Departamento donde se encuentra el equipo"
          options={departments.map(({ name, id }) => ({ label: name, value: id }))}
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Crear</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
