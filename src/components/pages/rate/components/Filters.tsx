'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { RateQuery } from '@/types/rate';

export const Filters = () => {
  const { users } = useFetchOptions({ selectFrom: ['USER'] });
  const { technicians } = useFetchOptions({ selectFrom: ['TECHNICIAN'] });
  const { hotUpdateFilterValue } = useFilters<Omit<RateQuery, 'id'>>({
    initialValue: {}
  });

  const handleChange = (key: keyof RateQuery, value: string) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const userOptions = [defaultOption, ...users.map((x) => ({ value: x.id, label: x.name }))];
  const techniciansOptions = [
    defaultOption,
    ...technicians.map((x) => ({ value: x.id, label: x.name }))
  ];

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={userOptions}
        onValueChange={(value) => handleChange('id_user', value)}
        label="Evaluator :"
      />
      <OptionsSelect
        options={techniciansOptions}
        onValueChange={(value) => handleChange('id_technician', value)}
        label="Evaluated :"
      />
    </div>
  );
};
