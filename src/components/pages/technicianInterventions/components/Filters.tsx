'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { TechnicianQuery } from '@/types/technician';

export const Filters = () => {
  const { technicians } = useFetchOptions({ selectFrom: ['TECHNICIAN'] });
  const { hotUpdateFilterValue } = useFilters<Omit<TechnicianQuery, 'id'>>({
    initialValue: {}
  });

  const handleChange = (key: keyof TechnicianQuery, value: string) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const techniciansOptions = [
    defaultOption,
    ...technicians.map((x) => ({ value: x.id, label: x.name }))
  ];
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={techniciansOptions}
        onValueChange={(value) => handleChange('id_user', value)}
        label="Select Technician :"
      />
    </div>
  );
};
