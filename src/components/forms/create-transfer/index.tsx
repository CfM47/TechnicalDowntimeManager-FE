'use client';

import { useForm } from 'react-hook-form';

import { createTransferDefaultValues, createTransferSchema } from './schema';

import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { TransferStatuses } from '@/lib/enums';
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
    mode: 'onTouched'
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  const onSubmit = async (values: CreateTransferFormValues) => {
    submitRequest('Transfer created successfully', 'Transfer wasn´t created', async () => {
      await TransferServices.create(values);
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
          description="User who created the transfer"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver"
          label="Receiver"
          description="User who receives the equipment from the transfer"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipment"
          description="Transferred equipment"
          options={equipments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver_dep"
          label="Receiving Department"
          description="Department that receives the equipment"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="status"
          label="Status"
          description="Transfer status"
          options={TransferStatuses.map((x) => ({ label: x, value: x }))}
        />

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Create</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
