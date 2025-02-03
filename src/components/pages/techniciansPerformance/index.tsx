'use client';
import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { TechnicianServices } from '@/services/features/technician';
import { PaginationQuery } from '@/services/routes/types';
import { TechnicianPerformanceType } from '@/types/technician';

/**
 * Props for the TechniciansPerformancePage component.
 *
 * @interface TechniciansPerformancePageProps
 * @property {PaginationQuery} [query] - Optional query parameters for the technicians performance page.
 */
interface TechniciansPerformancePageProps {
  query?: PaginationQuery;
}

/**
 * TechniciansPerformancePage component fetches and displays a list of technicians' performance.
 *
 * @param {TechniciansPerformancePageProps} props - The properties for the TechniciansPerformancePage component.
 * @param {PaginationQuery} [props.query] - Optional query parameters for fetching technicians' performance data.
 * @returns {Promise<JSX.Element>} The rendered TechniciansPerformancePage component.
 *
 * @example
 * <TechniciansPerformancePage query={{ page: 1, size: 10 }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the technicians' performance data in a table format.
 */

export const TechniciansPerformancePage = ({
  query
}: TechniciansPerformancePageProps): JSX.Element => {
  const heads = ['Name', 'Total Maintenances', 'Total Evaluations', 'Average Rate'];
  const title = 'Technicians Performance';

  const { data, isFetching } = useFetch({
    promise: TechnicianServices.Performance(query),
    defaultData: { items: [], total: 0, page: 1, size: 10 },
    dependencies: query ? [query] : []
  });

  const entries = data as PaginatedResponse<TechnicianPerformanceType>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems }} />
    </PrivateRouteContainer>
  );
};
