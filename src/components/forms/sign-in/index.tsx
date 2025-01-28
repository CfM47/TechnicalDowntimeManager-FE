'use client';

import { useForm } from 'react-hook-form';

import { signinDefaultValues, signinSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSecretInput } from '@/components/rhf/rhf-secret-input';
import { RHFSubmitButton } from '@/components/rhf/rhf-submit-button';
import { Form } from '@/components/ui/form';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { AuthServices } from '@/services/features/auth';
import useSessionStore from '@/stores/sesionStore';
import { AuthResponse } from '@/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export type SigninFormValues = z.infer<typeof signinSchema>;

export interface SigninFormProps {
  setOpen: (value: boolean) => void;
}

export const SigninForm = ({ setOpen }: SigninFormProps) => {
  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: signinDefaultValues
  });
  const { setToken, setName, setRole } = useSessionStore();

  const { submitRequest, isSubmitting } = useFormSubmit();
  const onSubmit = async (values: SigninFormValues) => {
    submitRequest('Successful login', 'An error occurred during authentication', async () => {
      const { data } = await AuthServices.signin(values);
      const authInfo = data as AuthResponse;
      if (authInfo) {
        setToken(authInfo.token);
        setName(authInfo.name);
        setRole(authInfo.role);
      }
      setOpen(false);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <RHFInput name="name" label="Name" description="User´s name" placeholder="John Doe" />
        <RHFSecretInput name="password" label="Password" description="Enter your user´s password" />

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <RHFSubmitButton {...{ isSubmitting }}>Log in</RHFSubmitButton>
        </div>
      </form>
    </Form>
  );
};
