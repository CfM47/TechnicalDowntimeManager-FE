'use client';
import { useController, useFormContext } from 'react-hook-form';

import { FieldProps } from '../types';

import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';

interface RHFNumericInputProps extends FieldProps, Omit<InputProps, 'name'> {}

export const RHFNumericInput = ({ name, label, description, ...props }: RHFNumericInputProps) => {
  const { control } = useFormContext();
  const {
    field: { onChange }
  } = useController({
    name,
    control
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value === '' ? '' : Number(value));
  };

  return (
    <FormField
      {...{ name, control }}
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Input {...props} {...field} type="number" onChange={handleChange} />
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
