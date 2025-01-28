'use client';

import { useForm } from 'react-hook-form';

import { editTransferSchema, TransferDefaultValues } from './schema';

import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { TransferStatuses } from '@/lib/enums';
import { TransferServices } from '@/services/features/transfer';
import { Transfer } from '@/types/transfer';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditTransferFormValues = z.infer<typeof editTransferSchema>;

export interface EditTransferFormProps {
  setOpen: (value: boolean) => void;
  item: Transfer;
}

export const EditTransferForm = ({ setOpen, item }: EditTransferFormProps) => {
  const transferData = {
    id_sender: item.sender.id,
    id_receiver: item.receiver.id,
    id_equipment: item.equipment.id,
    id_dep_receiver: item.receiver_dep.id,
    status: item.status
  };

  const form = useForm<EditTransferFormValues>({
    resolver: zodResolver(editTransferSchema),
    defaultValues: { ...TransferDefaultValues, ...transferData },
    mode: 'onTouched'
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: EditTransferFormValues) => {
    submitRequest('Transfer updated successfully', 'Transfer wasn´t updated', async () => {
      await TransferServices.update(
        item.sender.id,
        item.receiver.id,
        item.equipment.id,
        item.date,
        item.origin_dep.id,
        item.receiver_dep.id,
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
          <RHFSubmitButton {...{ isSubmitting }}>Save</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
