'use client';
import { useFormContext } from 'react-hook-form';

import { FieldProps } from '../types';

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

interface RHFCheckboxProps extends Omit<CheckboxProps, 'name'>, FieldProps {}

export const RHFCheckbox = ({ name, label, description, ...props }: RHFCheckboxProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      {...{ name, control }}
      {...props}
      render={({ field }) => (
        <>
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox {...props} checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
            </div>
          </FormItem>
          <FormMessage />
        </>
      )}
    />
  );
};
