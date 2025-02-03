import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { PaginatedResponse } from '@/services/api/api';
import { EquipmentServices } from '@/services/features/equipment';
import { PaginationQuery } from '@/services/routes/types';
import { EquipmentMaintenancesCount } from '@/types/equipment';

/**
 * Props for the DefectiveEquipmentsPage component.
 *
 * @interface DefectiveEquipmentsPageProps
 * @property {PaginationQuery} query - Optional query parameters for the equipment page.
 */
interface DefectiveEquipmentsPageProps {
  query?: PaginationQuery;
}

/**
 * DefectiveEquipmentsPage component fetches and displays the list of equipment that had more than three maintenances last year
 *
 * @param {DefectiveEquipmentsPageProps} props - The properties for the DefectiveEquipmentsPage component.
 * @param {object} props.query - The query parameters for fetching equipment.
 * @returns {Promise<JSX.Element>} The rendered DefectiveEquipmentsPage component.
 *
 * @example
 * <DefectiveEquipmentsPage query={{ page: 1 size: 10s }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the equipment data in a table format.
 */
export const DefectiveEquipmentsPage = async ({
  query
}: DefectiveEquipmentsPageProps): Promise<JSX.Element> => {
  const heads = ['Name', 'Type', 'Status', 'Department', 'Total maintenances'];
  const title = 'Defective Equipments';
  const { data } = await EquipmentServices.maintenancesLastYear(query);
  const entries = data as PaginatedResponse<EquipmentMaintenancesCount>;
  const tableBody = <Body data={entries.items} />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems }} />;
    </PrivateRouteContainer>
  );
};
