'use client';

import { useForm } from 'react-hook-form';

import { createRateDefaultValues, createRateSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: CreateRateFormValues) => {
    await RateServices.create(values);
    setOpen(false);
  };

  const { users, technicians } = useFetchOptions({ selectFrom: ['USER', 'TECHNICIAN'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFSelect
          name="id_technician"
          label="Valorador"
          description="Técnico que emite una valoración"
          options={technicians.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_user"
          label="Valorado"
          description="Usuario que recibe la valoración"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />

        <RHFInput
          name="comment"
          label="Comentario"
          description="Comentario"
          placeholder="di algo"
        />
        <RHFInput
          name="score"
          label="Puntuación"
          description="Puntuación"
          placeholder="1-5"
          type="number"
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
