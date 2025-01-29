'use client';

import { useForm } from 'react-hook-form';

import { editUserSchema, UserDefaultValues } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSelect } from '@/components/rhf/rhf-select';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFormSubmit } from '@/hooks/useFormSubmit';
// import { Roles } from '@/lib/enums';
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
    role: item.role
  };
  const form = useForm<EditUserFormValues>({
    resolver: zodResolver(editUserSchema),
    defaultValues: { ...UserDefaultValues, ...userData }
  });

  const { submitRequest, isSubmitting } = useFormSubmit();
  const onSubmit = async (values: EditUserFormValues) => {
    submitRequest('User updated successfully', 'User wasn´t updated', async () => {
      const data = {
        ...values,
        role: values.role
      };
      await UserServices.update(item.id, data);
      setOpen(false);
    });
  };

  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput name="name" label="Name" description="User´s name" placeholder="John Doe" />
        <RHFSelect
          name="id_department"
          label="Department"
          description="Department where the user works"
          options={departments.map(({ name, id }) => {
            return { label: name, value: id };
          })}
        />
        {/* <RHFSelect
          name="role"
          label="Role"
          description="The user's role defines the level of access they will have to the system"
          options={Roles.map((x) => ({ label: x, value: x }))}
        /> */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Save</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
