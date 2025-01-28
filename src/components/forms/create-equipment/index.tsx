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
    submitRequest('Equipment created successfully', 'Equipment wasn´t created', async () => {
      await EquipmentServices.create(values);
      setOpen(false);
    });
  };

  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput name="name" label="Name" description="Equipment name" placeholder="equipment" />

        <RHFSelect
          name="type"
          label="Type"
          description="Equipment type"
          options={EquipmentTypes.map((x) => ({ label: x, value: x }))}
        />

        <RHFSelect
          name="status"
          label="Status"
          description="Equipment status"
          options={EquipmentStatuses.map((x) => ({ label: x, value: x }))}
        />
        <RHFSelect
          name="id_department"
          label="Department"
          description="Department where the equipment is located"
          options={departments.map(({ name, id }) => ({ label: name, value: id }))}
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Create</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
