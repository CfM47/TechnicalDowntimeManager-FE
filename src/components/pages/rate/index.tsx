'use client';
import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateRateModal } from '@/components/modals/create-rate-modal';
import { Filters } from '@/components/pages/rate/components/Filters';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { RateServices } from '@/services/features/rate';
import { Rate, RateQuery } from '@/types/rate';

/**
 * Props for the RatePage component.
 *
 * @interface RatePageProps
 * @property {RateQuery} query - Optional query parameters for the rate page.
 */
interface RatePageProps {
  query?: RateQuery;
}

/**
 * RatePage component fetches and displays a list of rates.
 *
 * @param {RatePageProps} props - The properties for the RatePage component.
 * @param {object} props.query - The query parameters for fetching rates.
 * @returns {JSX.Element} The rendered RatePage component.
 *
 * @example
 * <RatePage query={{ evaluator: 'John Doe' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the rate data in a table format.
 */
export const RatePage = ({ query }: RatePageProps): JSX.Element => {
  const heads = ['Evaluator', 'Evaluated', 'Date', 'Comment', 'Rate'];
  const title = 'Evaluation';
  const addButton = <CreateRateModal />;
  const { data, isFetching } = useFetch({
    promise: RateServices.getAll(query),
    defaultData: { items: [], total: 0, page: 1, limit: 10 },
    dependencies: query ? [query] : []
  });
  const entries = data as PaginatedResponse<Rate>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const filters = <Filters />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, addButton, tableBody, filters, totalItems }} />;
    </PrivateRouteContainer>
  );
};
