import { Body } from './components/Body';
import { Filters } from './components/Filters';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { Role } from '@/lib/enums';
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
 * @returns {Promise<JSX.Element>} The rendered MaintenancesHistoryPage component.
 *
 * @example
 * <MaintenancesHistoryPage query={{page:1, size: 10}} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the maintenance data in a table format.
 */
export const MaintenanceHistoryPage = async ({
  query
}: MaintenancesHistoryPage): Promise<JSX.Element> => {
  const heads = ['Technician', 'Type', 'Date'];
  const title = 'Maintenance';
  const { data } = query?.id_equipment
    ? await MaintenanceServices.getAll(query)
    : { data: { items: [], page: 1, size: 10, totalItems: 0 } };
  const entries = data as PaginatedResponse<Maintenance>;
  const tableBody = <Body data={entries.items} />;
  const totalItems = entries.total;
  const filters = <Filters />;

  return (
    <PrivateRouteContainer authorizedRoles={[Role.admin]} redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems, filters }} />;
    </PrivateRouteContainer>
  );
};
