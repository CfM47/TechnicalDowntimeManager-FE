'use client';

import { useForm } from 'react-hook-form';

import { createUserDefaultValues, createUserSchema } from './schema';

import { RHFCheckbox } from '@/components/rhf/rhf-checkbox';
import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFNumericInput } from '@/components/rhf/rhf-numeric-input';
import { RHFSecretInput } from '@/components/rhf/rhf-secret-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
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
    defaultValues: createUserDefaultValues,
    mode: 'onTouched'
  });

  const { watch } = form;
  const { departments, roles } = useFetchOptions({ selectFrom: ['DEPARTMENT', 'ROLE'] });
  const isTechnician = watch('isTechnician');
  const { submitRequest, isSubmitting } = useFormSubmit();
  const onSubmit = async (values: CreateUserFormValues) => {
    await submitRequest('User created successfully', 'User wasn´t created', async () => {
      const data = {
        ...values,
        role: values.isTechnician
          ? (roles.find((x) => x.name === 'Technician') ?? values.role)
          : values.role
      };
      await UserServices.create(data);
      setOpen(false); // Cierra el modal tras el éxito
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput name="name" label="Name" description="Users name" placeholder="John Doe" />
        <RHFSecretInput
          name="password"
          label="Password"
          description="This password cannot be changed"
        />
        <RHFSelect
          name="id_department"
          label="Department"
          description="Department where the user works"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        <RHFCheckbox
          name="isTechnician"
          label="Is Technician"
          description="If the user is technician then his role will be set automatically to 'Technician'"
        />
        {isTechnician ? (
          <>
            <RHFNumericInput
              name="exp_years"
              label="Experience years"
              description="Time of the technician performing his carrer"
            />
            <RHFInput
              name="specialty"
              label="Specialty"
              description="Field of expertise of the technician"
            />
          </>
        ) : (
          <RHFSelect
            name="id_role"
            label="Role"
            description="The user's role defines the level of access they will have to the system"
            options={roles
              .filter((x) => x.name !== 'Technician')
              .map(({ name, id }) => ({
                label: name,
                value: id.toString()
              }))}
          />
        )}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Create</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
