'use client';
import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { useFetch } from '@/hooks/useFetch';
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
 * @returns {JSX.Element} The rendered DefectiveEquipmentsPage component.
 *
 * @example
 * <DefectiveEquipmentsPage query={{ page: 1 size: 10s }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the equipment data in a table format.
 */
export const DefectiveEquipmentsPage = ({ query }: DefectiveEquipmentsPageProps): JSX.Element => {
  const heads = ['Name', 'Type', 'Status', 'Department', 'Total maintenances'];
  const title = 'Defective Equipments';
  const { data, isFetching } = useFetch({
    promise: EquipmentServices.maintenancesLastYear(query),
    defaultData: { items: [], total: 0, page: 1, limit: 10 },
    dependencies: query ? [query] : []
  });
  const entries = data as PaginatedResponse<EquipmentMaintenancesCount>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems }} />;
    </PrivateRouteContainer>
  );
};
