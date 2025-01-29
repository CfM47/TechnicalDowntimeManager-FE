'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { MaintenanceTypes } from '@/lib/enums';
import { MaintenanceQuery } from '@/types/maitenance';

export const Filters = () => {
  const { equipments } = useFetchOptions({ selectFrom: ['EQUIPMENT'] });
  const { technicians } = useFetchOptions({ selectFrom: ['TECHNICIAN'] });
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
  const techniciansOptions = [
    defaultOption,
    ...technicians.map((x) => ({ value: x.id, label: x.name }))
  ];
  const typesOptions = [defaultOption, ...MaintenanceTypes.map((x) => ({ value: x, label: x }))];

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={techniciansOptions}
        onValueChange={(value) => handleChange('id_technician', value)}
        label="Technician :"
      />
      <OptionsSelect
        options={equipmentsOptions}
        onValueChange={(value) => handleChange('id_equipment', value)}
        label="Equipment :"
      />
      <OptionsSelect
        options={typesOptions}
        onValueChange={(value) => handleChange('type', value)}
        label="Type :"
      />
    </div>
  );
};
