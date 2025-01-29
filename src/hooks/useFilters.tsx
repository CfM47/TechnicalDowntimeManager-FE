import { useEffect, useState } from 'react';

import { QueryParams } from '@/services/routes/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { DebouncedState, useDebouncedCallback } from 'use-debounce';

/**
 * Interface for the properties of the useFilters hook.
 *
 * @template TQuery - A type that extends QueryParams.
 * @property {TQuery} initialValue - The initial value for the query parameters.
 */
interface UseFiltersProps<TQuery extends QueryParams> {
  initialValue: TQuery;
}

/**
 * Interface representing the return type of the useFilter hook.
 *
 * @template TQuery - The type of the query parameters.
 */
interface UseFilterReturn<TQuery extends QueryParams> {
  /**
   * The current query parameters.
   */
  query: TQuery;

  /**
   * Updates the value of a specific filter and immediately applies the change. Note: this function is wrapped in a debouncer function
   *
   * @param filter - The key of the filter to update.
   * @param value - The new value for the filter, which can be a string, number, or undefined.
   */
  hotUpdateFilterValue: DebouncedState<
    (filter: keyof TQuery, value: string | number | undefined) => void
  >;

  /**
   * Applies all the current filters.
   */
  applyFilters: () => void;

  /**
   * Updates the value of a specific filter without immediately applying the change.
   *
   * @param filter - The key of the filter to update.
   * @param value - The new value for the filter, which can be a string, number, or undefined.
   */
  lazyUpdateFilterValue: (filter: keyof TQuery, value: string | number | undefined) => void;
}

/**
 * Custom hook to manage query parameters for filtering.
 *
 * @template TQuery - The type of the query parameters.
 * @param {UseFiltersProps<TQuery>} props - The properties for the hook.
 * @param {TQuery} props.initialValue - The initial value of the query parameters.
 * @returns {UseFilterReturn<TQuery>} An object containing the current query, functions to update filter values, and apply filters.
 */
export const useFilters = <TQuery extends QueryParams>({
  initialValue
}: UseFiltersProps<TQuery>): UseFilterReturn<TQuery> => {
  const [query, setQuery] = useState(initialValue);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    updateSearchParams(query);
  }, []);

  const updateSearchParams = (query: { [x: string]: string | number | undefined }) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(query).forEach(([key, value]) => {
      if (value) params.set(key.toString(), value.toString());
      else params.delete(key.toString());
    });
    replace(`${pathname}?${params.toString()}`);
  };

  const hotUpdateFilterValue = useDebouncedCallback(
    (filter: keyof TQuery, value: string | number | undefined) => {
      setQuery((prev) => ({ ...prev, [filter]: value }));
      updateSearchParams({ [filter]: value });
    },
    300
  );

  const applyFilters = () => updateSearchParams(query);

  const lazyUpdateFilterValue = (filter: keyof TQuery, value: string | number | undefined) =>
    setQuery((prev) => ({ ...prev, [filter]: value }));

  return { query, hotUpdateFilterValue, applyFilters, lazyUpdateFilterValue };
};
