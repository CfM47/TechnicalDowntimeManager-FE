'use client';

import { useForm } from 'react-hook-form';

import { editRateSchema, RateDefaultValues } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import mockTechnicians from '@/mock/mockTechnicians.json';
import mockUsers from '@/mock/mockUser.json';
import { Technician } from '@/types/technician';
import { User } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditRateFormValues = z.infer<typeof editRateSchema>;

export interface EditRateFormProps {
  setOpen: (value: boolean) => void;
  downtimeData: EditRateFormValues;
}

export const EditRateForm = ({ setOpen, rateData }: EditRateFormProps) => {
  const form = useForm<EditRateFormValues>({
    resolver: zodResolver(editRateSchema),
    defaultValues: { ...RateDefaultValues, ...rateData },
    mode: 'onBlur'
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: EditRateFormValues) => {
    //TODO: consumir del servicio de Transfer put
    console.log('submitting');
    setOpen(false);
  };

  //fetch from endpoints
  const technicians = mockTechnicians as Technician[];
  const users = mockUsers as User[];

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
        <RHFInput name="score" label="Puntuación" description="Puntuación" placeholder="1-5" />
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button type="submit" variant="default">
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
};
