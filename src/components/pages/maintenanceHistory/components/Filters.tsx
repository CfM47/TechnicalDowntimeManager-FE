'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { MaintenanceQuery } from '@/types/maitenance';

export const Filters = () => {
  const { equipments } = useFetchOptions({ selectFrom: ['EQUIPMENT'] });
  const { hotUpdateFilterValue } = useFilters<Omit<MaintenanceQuery, 'id'>>({
    initialValue: {}
  });

  const handleChange = (key: keyof MaintenanceQuery, value: string) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const equipmentsOptions = [
    defaultOption,
    ...equipments.map((x) => ({ value: x.id, label: x.name }))
  ];
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={equipmentsOptions}
        onValueChange={(value) => handleChange('id_equipment', value)}
        label="Select Equipment :"
      />
    </div>
  );
};
