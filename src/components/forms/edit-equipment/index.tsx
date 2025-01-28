'use client';

import { useForm } from 'react-hook-form';

import { editEquipmentSchema, EquipmentDefaultValues } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { EquipmentStatuses, EquipmentTypes } from '@/lib/enums';
import { EquipmentServices } from '@/services/features/equipment';
import { Equipment } from '@/types/equipment';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditEquipmentFormValues = z.infer<typeof editEquipmentSchema>;

export interface EditEquipmentFormProps {
  setOpen: (value: boolean) => void;
  item: Equipment;
}

export const EditEquipmentForm = ({ setOpen, item }: EditEquipmentFormProps) => {
  const equipmentData = {
    name: item.name,
    type: item.type,
    status: item.status
  };

  const form = useForm<EditEquipmentFormValues>({
    resolver: zodResolver(editEquipmentSchema),
    defaultValues: { ...EquipmentDefaultValues, ...equipmentData }
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: EditEquipmentFormValues) => {
    submitRequest('Equipment updated successfully', 'Equipment wasn´t updated', async () => {
      await EquipmentServices.update(item.id, values);
      setOpen(false);
    });
  };

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
          name="state"
          label="Status"
          description="Equipment status"
          options={EquipmentStatuses.map((x) => ({ label: x, value: x }))}
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Save</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
