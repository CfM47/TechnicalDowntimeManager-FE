'use client';

import { useForm } from 'react-hook-form';

import { DowntimeDefaultValues, editDowntimeSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { DowntimeStatuses } from '@/lib/enums';
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
    submitRequest('Downtime updated successfully', 'Downtime wasn´t updated', async () => {
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
          label="Sender"
          description="User that create the downtime"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver"
          label="Receiver"
          description="The user that receive the downtime"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipment"
          description="The equipment to deactivate"
          options={equipments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_dep_receiver"
          label="Receiver department"
          description="Department that receive the equipment"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="status"
          label="Status"
          description="Downtime status"
          options={DowntimeStatuses.map((x) => ({ label: x, value: x }))}
        />
        <RHFInput
          name="cause"
          label="Cause"
          description="Downtime cause"
          placeholder="Technical failure"
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Save</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
