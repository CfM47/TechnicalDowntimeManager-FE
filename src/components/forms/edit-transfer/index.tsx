'use client';

import { useForm } from 'react-hook-form';

import { editTransferSchema, TransferDefaultValues } from './schema';

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

export type EditTransferFormValues = z.infer<typeof editTransferSchema>;

export interface EditTransferFormProps {
  setOpen: (value: boolean) => void;
  downtimeData: EditTransferFormValues;
}

export const EditTransferForm = ({ setOpen, transferData }: EditTransferFormProps) => {
  const form = useForm<EditTransferFormValues>({
    resolver: zodResolver(editTransferSchema),
    defaultValues: { ...TransferDefaultValues, ...transferData },
    mode: 'onBlur'
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: EditTransferFormValues) => {
    //TODO: consumir del servicio de Transfer put
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
          description="Usuario creador del traslado"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_receiver"
          label="Receptor"
          description="Usuario que recibe el equipo del traslado"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipo"
          description="Equipo trasladado"
          options={equipment.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_dep_origin"
          label="Departamento de Origen"
          description="Departamento que envía el equipo"
          options={departments.map(({ name, id }) => {
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
          description="Estado del traslado"
          placeholder="estado"
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
