'use client';

import { useForm } from 'react-hook-form';

import { createDowntimeDefaultValues, createDowntimeSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import mockDepartments from '@/mock/mockDepartments.json';
import mockEquipments from '@/mock/mockEquipment.json';
import mockUser from '@/mock/mockUser.json'; // Mock data for users
import { Department } from '@/types/department';
import { Equipment } from '@/types/equipment';
import { User } from '@/types/user'; // User type
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type CreateDowntimeFormValues = z.infer<typeof createDowntimeSchema>;

export interface CreateDowntimeFormProps {
  setOpen: (value: boolean) => void;
}

export const CreateDowntimeForm = ({ setOpen }: CreateDowntimeFormProps) => {
  const form = useForm<CreateDowntimeFormValues>({
    resolver: zodResolver(createDowntimeSchema),
    defaultValues: createDowntimeDefaultValues,
    mode: 'onBlur'
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: CreateDowntimeFormValues) => {
    //TODO: consumir del servicio de downtimes post
    console.log('submiting');
    setOpen(false);
  };

  //fetch from endpoints
  const departments = mockDepartments as Department[];
  const equipments = mockEquipments as Equipment[];
  const users = mockUser as User[]; // Mock users

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFSelect
          name="id_sender"
          label="Remitente"
          description="Usuario creador de la baja"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver"
          label="Receptor"
          description="Usuario que recibe el equipo dado de baja"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipo"
          description="Equipo dado de baja"
          options={equipments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_dep_receiver"
          label="Departamento Receptor"
          description="Departamento que recibe el equipo"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFInput
          name="status"
          label="Estado"
          description="Estado de la baja"
          placeholder="Activo"
        />
        <RHFInput
          name="cause"
          label="Causa"
          description="Causa de la baja"
          placeholder="Falla técnica"
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
