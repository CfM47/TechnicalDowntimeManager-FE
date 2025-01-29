import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { authorizedRolesByRoute } from '@/lib/constants';
import { PaginatedResponse } from '@/services/api/api';
import { DowntimeServices } from '@/services/features/downtime';
import { PaginationQuery } from '@/services/routes/types';
import { Downtime } from '@/types/downtime';

/**
 * Props for the DowntimesPage component.
 *
 * @interface DowntimesPageProps
 * @property {PaginationQuery} query - Optional query parameters for the downtimes page.
 */
interface LastYearDowntimesPageProps {
  query?: PaginationQuery;
}

/**
 * DowntimesPage component fetches and displays a list of downtimes.
 *
 * @param {LastYearDowntimesPageProps} props - The properties for the DowntimesPage component.
 * @param {object} props.query - The query parameters for fetching downtimes.
 * @returns {Promise<JSX.Element>} The rendered DowntimesPage component.
 *
 * @example
 * <DowntimesPage query={{ status: 'active' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the downtime data in a table format.
 */
export const LastYearDowntimesPage = async ({
  query
}: LastYearDowntimesPageProps): Promise<JSX.Element> => {
  const heads = ['Equipment', 'Sender', 'Destiny', 'Receiver'];
  const title = 'Last Year Downtimes';
  const { data } = await DowntimeServices.lastYear(query);
  const entries = data as PaginatedResponse<Downtime>;
  const tableBody = <Body data={entries.items} />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.downtimes} redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems }} />;
    </PrivateRouteContainer>
  );
};
