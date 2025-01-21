'use client';

import { useForm } from 'react-hook-form';

import { editUserSchema, UserDefaultValues } from './schema';

import { CreateUserFormValues } from '@/components/forms/create-user';
import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { UserServices } from '@/services/features/user';
import { User } from '@/types/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type EditUserFormValues = z.infer<typeof editUserSchema>;

export interface EditUserFormProps {
  setOpen: (value: boolean) => void;
  item: User;
}

export const EditUserForm = ({ setOpen, item }: EditUserFormProps) => {
  const userData = {
    name: item.name,
    id_department: item.department.id,
    id_role: item.role.id
  };
  const form = useForm<EditUserFormValues>({
    resolver: zodResolver(editUserSchema),
    defaultValues: { ...UserDefaultValues, ...userData }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (values: CreateUserFormValues) => {
    await UserServices.update(item.id, values);
    setOpen(false);
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
