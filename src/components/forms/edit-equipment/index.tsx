'use client';

import { useForm } from 'react-hook-form';

import { editEquipmentSchema, EquipmentDefaultValues } from './schema';

import { CreateEquipmentFormValues } from '@/components/forms/create-equipment';
import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useRefreshPage } from '@/hooks/useRefreshPage';
import { EquipmentServices } from '@/services/features/equipment';
import { Equipment } from '@/types/equipment';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditEquipmentFormValues = z.infer<typeof editEquipmentSchema>;

export interface EditEquipmentFormProps {
  setOpen: (value: boolean) => void;
  item: Equipment;
}

export const EditEquipmentForm = ({ setOpen, item }: EditEquipmentFormProps) => {
  const equipmentData = {
    name: item.name,
    type: item.type,
    state: item.state,
    id_department: item.department.id
  };

  const form = useForm<EditEquipmentFormValues>({
    resolver: zodResolver(editEquipmentSchema),
    defaultValues: { ...EquipmentDefaultValues, ...equipmentData }
  });

  const { submitRequest } = useRefreshPage();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: CreateEquipmentFormValues) => {
    submitRequest('success', 'Equipo actualizado correctamente', async () => {
      await EquipmentServices.update(item.id, values);
      setOpen(false);
    });
  };

  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput name="name" label="Nombre" description="Nombre de equipo" placeholder="equipo" />
        <RHFSelect
          name="type"
          label="tipo"
          description="Tipo de equipo"
          options={[
            { label: 'Informático', value: 'Informático' },
            { label: 'Comunicaciones', value: 'Comunicaciones' },
            { label: 'Electrónico', value: 'Electrónico' },
            { label: 'Seguridad', value: 'Seguridad' },
            { label: 'Oficina', value: 'Oficina' }
          ]}
        />

        <RHFSelect
          name="state"
          label="Estado"
          description="Estado del equipo"
          options={[
            { label: 'Operativo', value: 'Operativo' },
            { label: 'Mantenimiento', value: 'Mantenimiento' },
            { label: 'Baja', value: 'Baja' }
          ]}
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
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
};
