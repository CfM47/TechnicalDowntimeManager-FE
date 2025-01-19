'use client';

import { useForm } from 'react-hook-form';

import { DowntimeDefaultValues, editDowntimeSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import mockDepartments from '@/mock/mockDepartments.json';
import mockEquipments from '@/mock/mockEquipment.json';
import mockUsers from '@/mock/mockUser.json';
import { Department } from '@/types/department';
import { Equipment } from '@/types/equipment';
import { User } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditDowntimeFormValues = z.infer<typeof editDowntimeSchema>;

export interface EditDowntimeFormProps {
  setOpen: (value: boolean) => void;
  downtimeData: EditDowntimeFormValues;
}

export const EditDowntimeForm = ({ setOpen, downtimeData }: EditDowntimeFormProps) => {
  const form = useForm<EditDowntimeFormValues>({
    resolver: zodResolver(editDowntimeSchema),
    defaultValues: { ...DowntimeDefaultValues, ...downtimeData },
    mode: 'onBlur'
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: EditDowntimeFormValues) => {
    //TODO: consumir del servicio de downtimes put
    console.log('submitting');
    setOpen(false);
  };

  //fetch from endpoints
  const departments = mockDepartments as Department[];
  const equipment = mockEquipments as Equipment[];
  const users = mockUsers as User[];

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
          options={equipment.map(({ name, id }) => {
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
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
};
