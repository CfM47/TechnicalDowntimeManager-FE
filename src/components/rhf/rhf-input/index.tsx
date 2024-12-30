'use client';
import { useFormContext } from 'react-hook-form';

import { FieldProps } from '../types';

import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';

interface RHFInputProps extends FieldProps, Omit<InputProps, 'name'> {}

export const RHFInput = ({ name, label, description, ...props }: RHFInputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      {...{ name, control }}
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Input {...props} {...field} />
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
