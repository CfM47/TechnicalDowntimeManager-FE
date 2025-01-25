'use client';

import { useForm } from 'react-hook-form';

import { editMaintenanceDefaultValues, editMaintenanceSchema } from './schema';

import { RHFNumericInput } from '@/components/rhf/rhf-numeric-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { MaintenanceServices } from '@/services/features/maintenance';
import { Maintenance } from '@/types/maitenance';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditMaintenanceFormValues = z.infer<typeof editMaintenanceSchema>;

export interface EditMaintenanceFormProps {
  setOpen: (value: boolean) => void;
  item: Maintenance;
}

export const EditMaintenanceForm = ({ setOpen, item }: EditMaintenanceFormProps) => {
  const maintenanceData = {
    id_technician: item.technician.id,
    id_equipment: item.equipment.id,
    type: item.type,
    cost: item.cost
  };

  const form = useForm<EditMaintenanceFormValues>({
    resolver: zodResolver(editMaintenanceSchema),
    defaultValues: { ...editMaintenanceDefaultValues, ...maintenanceData },
    mode: 'onBlur'
  });

  const { submitRequest } = useFormSubmit();
  const onSubmit = async (values: EditMaintenanceFormValues) => {
    submitRequest('success', 'Mantenimiento actualizado correctamente', async () => {
      await MaintenanceServices.update(item.technician.id, item.equipment.id, item.date, values);
      setOpen(false);
    });
  };
  const { equipments, technicians } = useFetchOptions({ selectFrom: ['EQUIPMENT', 'TECHNICIAN'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFSelect
          name="id_technician"
          label="Técnico"
          description="Técnico encargado del mantenimiento"
          options={technicians.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_equipment"
          label="Equipo"
          description="Equipo que recibe el mantenimiento"
          options={equipments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="type"
          label="Tipo de Mantenimiento"
          description="Tipo de mantenimiento realizado"
          options={[
            { label: 'Preventivo', value: 'Preventivo' },
            { label: 'Correctivo', value: 'Correctivo' },
            { label: 'Predictivo', value: 'Predictivo' }
          ]}
        />
        <RHFNumericInput
          name="cost"
          label="Costo"
          description="Costo del mantenimiento"
          placeholder="100"
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
