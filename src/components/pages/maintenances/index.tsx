import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateMaintenanceModal } from '@/components/modals/create-maintenance-modal';
import { authorizedRolesByRoute } from '@/lib/constants';
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
 * @returns {Promise<JSX.Element>} The rendered MaintenancesPage component.
 *
 * @example
 * <MaintenancesPage query={{ technician: 'John Doe' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the maintenance data in a table format.
 */
export const MaintenancesPage = async ({ query }: MaintenancesPageProps): Promise<JSX.Element> => {
  const heads = ['Technician', 'Equipment', 'Cost', 'Type', 'Date'];
  const title = 'Maintenance';
  const addButton = <CreateMaintenanceModal />;
  const { data } = await MaintenanceServices.getAll(query);
  const entries = data as Maintenance[];
  const tableBody = <Body data={entries} />;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.maintenances} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody }} />;
    </PrivateRouteContainer>
  );
};
