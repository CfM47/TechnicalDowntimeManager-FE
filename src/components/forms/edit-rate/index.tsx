'use client';

import { useForm } from 'react-hook-form';

import { editRateSchema, RateDefaultValues } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFNumericInput } from '@/components/rhf/rhf-numeric-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { toastRequest } from '@/lib/utils';
import { RateServices } from '@/services/features/rate';
import { Rate } from '@/types/rate';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditRateFormValues = z.infer<typeof editRateSchema>;

export interface EditRateFormProps {
  setOpen: (value: boolean) => void;
  item: Rate;
}
export const EditRateForm = ({ setOpen, item }: EditRateFormProps) => {
  const rateData = {
    technician: item.technician.id,
    user: item.user.id,
    date: item.date,
    comment: item.comment,
    score: item.score
  };

  const form = useForm<EditRateFormValues>({
    resolver: zodResolver(editRateSchema),
    defaultValues: { ...RateDefaultValues, ...rateData },
    mode: 'onBlur'
  });

  const onSubmit = async (values: EditRateFormValues) => {
    toastRequest('success', 'Valoración actualizada correctamente', async () => {
      await RateServices.update(item.technician.id, item.user.id, item.date, values);
      setOpen(false);
    });
  };

  const { technicians, users } = useFetchOptions({ selectFrom: ['TECHNICIAN', 'USER'] });

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
        <RHFNumericInput
          name="score"
          label="Puntuación"
          description="Puntuación"
          placeholder="1-5"
        />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button type="submit" variant="default">
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
};
