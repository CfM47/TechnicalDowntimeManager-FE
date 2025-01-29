'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { TransferQuery } from '@/types/transfer';

export const Filters = () => {
  const { equipments } = useFetchOptions({ selectFrom: ['EQUIPMENT'] });
  const { hotUpdateFilterValue } = useFilters<
    Pick<TransferQuery, 'id_equipment' | 'page' | 'size'>
  >({
    initialValue: {
      id_equipment: undefined,
      page: 1,
      size: 10
    }
  });

  const handleChange = (key: 'id_equipment' | 'page' | 'size', value: string | number) => {
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
