'use client';
import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateDowntimeModal } from '@/components/modals/create-downtime-modal';
import { Filters } from '@/components/pages/downtimes/components/Filters';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { DowntimeServices } from '@/services/features/downtime';
import { Downtime, DowntimeQuery } from '@/types/downtime';

/**
 * Props for the DowntimesPage component.
 *
 * @interface DowntimesPageProps
 * @property {DowntimeQuery} query - Optional query parameters for the downtimes page.
 */
interface DowntimesPageProps {
  query?: DowntimeQuery;
}

/**
 * DowntimesPage component fetches and displays a list of downtimes.
 *
 * @param {DowntimesPageProps} props - The properties for the DowntimesPage component.
 * @param {object} props.query - The query parameters for fetching downtimes.
 * @returns {JSX.Element} The rendered DowntimesPage component.
 *
 * @example
 * <DowntimesPage query={{ status: 'active' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the downtime data in a table format.
 */
export const DowntimesPage = ({ query }: DowntimesPageProps): JSX.Element => {
  const heads = ['Sender', 'Equipment', 'Destiny', 'Receiver', 'Date'];
  const title = 'Downtime';
  const addButton = <CreateDowntimeModal />;
  const { data, isFetching } = useFetch({
    promise: DowntimeServices.getAll(query),
    defaultData: { items: [], total: 0, page: 1, limit: 10 },
    dependencies: query ? [query] : []
  });
  const entries = data as PaginatedResponse<Downtime>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const filters = <Filters />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, addButton, tableBody, filters, totalItems }} />;
    </PrivateRouteContainer>
  );
};
