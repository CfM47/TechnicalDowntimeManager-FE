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
  label?: string;
  className?: string;
}

export const OptionsSelect = ({
  options,
  placeholder,
  onValueChange,
  defaultValue,
  label,
  className
}: OptionsSelectProps) => {
  return (
    <Select {...{ onValueChange, defaultValue }}>
      <div className="flex items-center space-x-2 w-full">
        {label && <p className="min-w-[100px]">{label}</p>}
        <SelectTrigger className={cn('w-[180px]', className)}>
          <SelectValue {...{ placeholder }} />
        </SelectTrigger>
      </div>
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
