'use client';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { FieldProps } from '../types';

import { EyeOffButton } from '@/components/common/eye-off-button';
import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';

interface RHFSecretInputProps extends FieldProps, Omit<InputProps, 'name'> {}

export const RHFSecretInput = ({ name, label, description, ...props }: RHFSecretInputProps) => {
  const { control } = useFormContext();
  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => setIsShow(!isShow);

  return (
    <FormField
      {...{ name, control }}
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className="relative">
            <Input {...props} {...field} type={isShow ? 'text' : 'password'} />
            <EyeOffButton {...{ isShow, toggleShow }} />
          </div>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
