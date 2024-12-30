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
import { RadioGroup, RadioGroupItem, RadioGroupProps } from '@/components/ui/radio-group';

interface RHFRadioGroupProps extends Omit<RadioGroupProps, 'name'>, FieldProps {
  options: { value: string; label: string }[];
}

export const RHFRadioGroup = ({
  name,
  label,
  description,
  options,
  ...props
}: RHFRadioGroupProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      {...{ name, control }}
      {...props}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup {...props} onValueChange={field.onChange} defaultValue={field.value}>
              {options.map((option, index) => (
                <FormItem key={index} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel>{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
