'use client';

import { useForm } from 'react-hook-form';

import { createEquipmentDefaultValues, createEquipmentSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: CreateEquipmentFormValues) => {
    await EquipmentServices.create(values);
    setOpen(false);
  };

  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput name="name" label="Nombre" description="Nombre de equipo" placeholder="equipo" />
        <RHFInput name="type" label="tipo" description="Tipo de equipo" placeholder="tipo" />

        <RHFInput
          name="state"
          label="Estado"
          description="Estado del equipo"
          placeholder="estado"
        />
        <RHFSelect
          name="id_department"
          label="Departamento"
          description="Departamento donde se encuentra el equipo"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
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
