import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface OptionsSelectProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
}

export const OptionsSelect = ({
  options,
  placeholder,
  onValueChange,
  defaultValue,
  className
}: OptionsSelectProps) => {
  return (
    <Select {...{ onValueChange, defaultValue }}>
      <SelectTrigger className={cn('w-[180px]', className)}>
        <SelectValue {...{ placeholder }} />
      </SelectTrigger>
      <SelectContent>
        {options.map(({ label, value }, index) => (
          <SelectItem value={value} key={index}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
