'use client';
import { useFormContext } from 'react-hook-form';

import { FieldProps } from '../types';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Switch, SwitchProps } from '@/components/ui/switch';

interface RHFSwitchProps extends FieldProps, Omit<SwitchProps, 'name'> {}

export const RHFSwitch = ({ name, label, description, ...props }: RHFSwitchProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      {...{ name, control }}
      {...props}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between">
          <div className="space-y-0.5">
            <FormLabel className="text-base">{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </div>
          <FormControl>
            <Switch {...props} checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
