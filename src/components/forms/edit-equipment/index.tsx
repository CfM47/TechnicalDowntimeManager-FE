'use client';

import { useForm } from 'react-hook-form';

import { editEquipmentSchema, EquipmentDefaultValues } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { EquipmentStatuses, EquipmentTypes } from '@/lib/enums';
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
    status: item.status,
    id_department: item.department.id
  };

  const form = useForm<EditEquipmentFormValues>({
    resolver: zodResolver(editEquipmentSchema),
    defaultValues: { ...EquipmentDefaultValues, ...equipmentData }
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: EditEquipmentFormValues) => {
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
          options={EquipmentTypes.map((x) => ({ label: x, value: x }))}
        />

        <RHFSelect
          name="state"
          label="Estado"
          description="Estado del equipo"
          options={EquipmentStatuses.map((x) => ({ label: x, value: x }))}
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
          <RHFSubmitButton {...{ isSubmitting }}>Guardar</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
