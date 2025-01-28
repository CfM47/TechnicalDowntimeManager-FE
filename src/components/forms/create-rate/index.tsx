'use client';

import { useForm } from 'react-hook-form';

import { createRateDefaultValues, createRateSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFNumericInput } from '@/components/rhf/rhf-numeric-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { RateServices } from '@/services/features/rate';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type CreateRateFormValues = z.infer<typeof createRateSchema>;

export interface CreateRateFormProps {
  setOpen: (value: boolean) => void;
}

export const CreateRateForm = ({ setOpen }: CreateRateFormProps) => {
  const form = useForm<CreateRateFormValues>({
    resolver: zodResolver(createRateSchema),
    defaultValues: createRateDefaultValues,
    mode: 'onBlur'
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: CreateRateFormValues) => {
    submitRequest('Evaluation created successfully', 'Evaluation wasn´t created', async () => {
      await RateServices.create(values);
      setOpen(false);
    });
  };

  const { users, technicians } = useFetchOptions({ selectFrom: ['USER', 'TECHNICIAN'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFSelect
          name="id_user"
          label="Evaluator"
          description="User who issues the evaluation"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />

        <RHFSelect
          name="id_technician"
          label="Rated"
          description="Technician who receives an evaluation"
          options={technicians.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />

        <RHFInput
          name="comment"
          label="Comment"
          description="Comment"
          placeholder="Say something"
        />
        <RHFNumericInput
          name="score"
          label="Rate"
          description="Rate"
          placeholder="1-5"
          type="number"
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Create</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
