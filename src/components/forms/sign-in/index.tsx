'use client';

import { useForm } from 'react-hook-form';

import { signinDefaultValues, signinSchema } from './schema';

import { RHFInput } from '@/components/rhf/rhf-input';
import { RHFSecretInput } from '@/components/rhf/rhf-secret-input';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: SigninFormValues) => {
    //TODO: consumir del servicio de signin post
    console.log('submiting');
    setOpen(false);
  };

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
          description="Ingresa tu contraseña de usuario"
        />

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button type="submit" variant="default">
            Sign In
          </Button>
        </div>
      </form>
    </Form>
  );
};
