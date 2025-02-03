'use client';
import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateMaintenanceModal } from '@/components/modals/create-maintenance-modal';
import { Filters } from '@/components/pages/maintenances/components/Filters';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { MaintenanceServices } from '@/services/features/maintenance';
import { Maintenance, MaintenanceQuery } from '@/types/maitenance';

/**
 * Props for the MaintenancesPage component.
 *
 * @interface MaintenancesPageProps
 * @property {MaintenanceQuery} query - Optional query parameters for the maintenances page.
 */
interface MaintenancesPageProps {
  query?: MaintenanceQuery;
}

/**
 * MaintenancesPage component fetches and displays a list of maintenances.
 *
 * @param {MaintenancesPageProps} props - The properties for the MaintenancesPage component.
 * @param {object} props.query - The query parameters for fetching maintenances.
 * @returns {JSX.Element} The rendered MaintenancesPage component.
 *
 * @example
 * <MaintenancesPage query={{ technician: 'John Doe' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the maintenance data in a table format.
 */
export const MaintenancesPage = ({ query }: MaintenancesPageProps): JSX.Element => {
  const heads = ['Technician', 'Equipment', 'Cost', 'Type', 'Date'];
  const title = 'Maintenance';
  const addButton = <CreateMaintenanceModal />;
  const { data, isFetching } = useFetch({
    promise: MaintenanceServices.getAll(query),
    defaultData: { items: [], total: 0, page: 1, limit: 10 },
    dependencies: query ? [query] : []
  });
  const entries = data as PaginatedResponse<Maintenance>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const filters = <Filters />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, addButton, tableBody, filters, totalItems }} />;
    </PrivateRouteContainer>
  );
};
