'use client';
import { Body } from './components/Body';
import { Filters } from './components/Filters';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { MaintenanceServices } from '@/services/features/maintenance';
import { Maintenance, MaintenanceQuery } from '@/types/maitenance';

/**
 * Props for the MaintenancesHistoryPage component.
 *
 * @interface MaintenancesHistoryPageProps
 * @property {MaintenanceQuery} query - Optional query parameters for the maintenances page.
 */
interface MaintenancesHistoryPage {
  query?: Pick<MaintenanceQuery, 'id_equipment' | 'page' | 'size'>;
}

/**
 * MaintenancesHistoryPage component fetches and displays a list of maintenances of a given equipment.
 *
 * @param {MaintenancesHistoryPage} props - The properties for the MaintenancesHistoryPage component.
 * @param {object} props.query - The query parameters for fetching maintenances.
 * @returns {JSX.Element} The rendered MaintenancesHistoryPage component.
 *
 * @example
 * <MaintenancesHistoryPage query={{page:1, size: 10}} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the maintenance data in a table format.
 */
export const MaintenanceHistoryPage = ({ query }: MaintenancesHistoryPage): JSX.Element => {
  const heads = ['Technician', 'Type', 'Date'];
  const title = 'Maintenance History';

  const { data, isFetching } = useFetch({
    promise: query?.id_equipment
      ? MaintenanceServices.getAll(query)
      : Promise.resolve({
          data: { items: [], page: 1, size: 10, total: 0 },
          status: 200,
          statusText: 'OK'
        }),
    defaultData: { items: [], total: 0, page: 1, size: 10 },
    dependencies: query ? [query] : []
  });

  const entries = data as PaginatedResponse<Maintenance>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const totalItems = entries.total;
  const filters = <Filters />;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems, filters }} />
    </PrivateRouteContainer>
  );
};
