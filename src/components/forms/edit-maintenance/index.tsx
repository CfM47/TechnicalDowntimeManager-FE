'use client';

import { useForm } from 'react-hook-form';

import { editMaintenanceDefaultValues, editMaintenanceSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import mockEquipments from '@/mock/mockEquipments.json';
import mockUsers from '@/mock/mockUser.json';
import { Equipment } from '@/types/equipment';
import { User } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditMaintenanceFormValues = z.infer<typeof editMaintenanceSchema>;

export interface EditMaintenanceFormProps {
  setOpen: (value: boolean) => void;
  maintenanceData: EditMaintenanceFormValues;
}

export const EditMaintenanceForm = ({ setOpen, maintenanceData }: EditMaintenanceFormProps) => {
  const form = useForm<EditMaintenanceFormValues>({
    resolver: zodResolver(editMaintenanceSchema),
    defaultValues: { ...editMaintenanceDefaultValues, ...maintenanceData },
    mode: 'onBlur'
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: EditMaintenanceFormValues) => {
    //TODO: consumir del servicio de mantenimientos put
    console.log('submitting');
    setOpen(false);
  };

  const equipment = mockEquipments as Equipment[];
  const users = mockUsers as User[];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFSelect
          name="id_technician"
          label="Técnico"
          description="Técnico encargado del mantenimiento"
          options={users.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipo"
          description="Equipo que recibe el mantenimiento"
          options={equipment.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFInput
          name="type"
          label="Tipo de Mantenimiento"
          description="Tipo de mantenimiento realizado"
          placeholder="Preventivo"
        />
        <RHFInput
          name="cost"
          label="Costo"
          description="Costo del mantenimiento"
          placeholder="100"
          type="number"
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
