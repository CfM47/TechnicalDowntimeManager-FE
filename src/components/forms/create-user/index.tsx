'use client';

import { useForm } from 'react-hook-form';

import { createUserDefaultValues, createUserSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSecretInput } from '@/components/rhf/rhf-secret-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useRefreshPage } from '@/hooks/useRefreshPage';
import { UserServices } from '@/services/features/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type CreateUserFormValues = z.infer<typeof createUserSchema>;

export interface CreateUserFormProps {
  setOpen: (value: boolean) => void;
}

export const CreateUserForm = ({ setOpen }: CreateUserFormProps) => {
  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: createUserDefaultValues
  });

  const { submitRequest } = useRefreshPage();
  const onSubmit = async (values: CreateUserFormValues) => {
    await submitRequest('Usuario creado correctamente', 'Error al crear el usuario', async () => {
      const data = {
        ...values,
        id_role: Number(values.id_role)
      };
      await UserServices.create(data);
      setOpen(false); // Cierra el modal tras el éxito
    });
  };

  const { departments, roles } = useFetchOptions({ selectFrom: ['DEPARTMENT', 'ROLE'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput
          name="name"
          label="Nombre"
          description="Nombre de usuario"
          placeholder="John Doe"
        />
        <RHFSecretInput
          name="password"
          label="contraseña"
          description="!!! Esta contraseña no puede ser cambiada"
        />
        <RHFSelect
          name="id_department"
          label="Departamento"
          description="Departamento donde trabaja el usuario"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFSelect
          name="id_role"
          label="Rol"
          description="El rol del usuario define el nivel de acceso que este tendrá al sistema"
          options={roles.map(({ name, id }) => {
            return { label: name, value: id.toString() };
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
