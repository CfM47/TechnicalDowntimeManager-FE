'use client';
import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { DowntimeServices } from '@/services/features/downtime';
import { PaginationQuery } from '@/services/routes/types';
import { Downtime } from '@/types/downtime';

/**
 * Props for the LastYearDowntimesPage component.
 *
 * @interface LastYearDowntimesPageProps
 * @property {PaginationQuery} query - Optional query parameters for the downtimes page.
 */
interface LastYearDowntimesPageProps {
  query?: PaginationQuery;
}

/**
 * DowntimesPage component fetches and displays a list of downtimes.
 *
 * @param {LastYearDowntimesPageProps} props - The properties for the LastYearDowntimesPage component.
 * @param {object} props.query - The query parameters for fetching downtimes.
 * @returns {JSX.Element} The rendered LastYearDowntimesPage component.
 *
 * @example
 * <LastYearDowntimesPage query={{ page: 1, size: 10 }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the downtime data in a table format.
 */
export const LastYearDowntimesPage = ({ query }: LastYearDowntimesPageProps): JSX.Element => {
  const heads = ['Equipment', 'Sender', 'Destiny', 'Receiver'];
  const title = 'Last Year Downtimes';
  const { data, isFetching } = useFetch({
    promise: DowntimeServices.lastYear(query),
    defaultData: { items: [], total: 0, page: 1, limit: 10 },
    dependencies: query ? [query] : []
  });
  const entries = data as PaginatedResponse<Downtime>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems }} />;
    </PrivateRouteContainer>
  );
};
