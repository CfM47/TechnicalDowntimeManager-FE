import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateEquipmentModal } from '@/components/modals/create-equipment-modal';
import { Filters } from '@/components/pages/equipment/components/Filters';
import { authorizedRolesByRoute } from '@/lib/constants';
import { PaginatedResponse } from '@/services/api/api';
import { EquipmentServices } from '@/services/features/equipment';
import { Equipment, EquipmentQuery } from '@/types/equipment';

/**
 * Props for the EquipmentPage component.
 *
 * @interface EquipmentPageProps
 * @property {EquipmentQuery} query - Optional query parameters for the equipment page.
 */
interface EquipmentPageProps {
  query?: EquipmentQuery;
}

/**
 * EquipmentPage component fetches and displays a list of equipment.
 *
 * @param {EquipmentPageProps} props - The properties for the EquipmentPage component.
 * @param {object} props.query - The query parameters for fetching equipment.
 * @returns {Promise<JSX.Element>} The rendered EquipmentPage component.
 *
 * @example
 * <EquipmentPage query={{ type: 'Laptop' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the equipment data in a table format.
 */
export const EquipmentPage = async ({ query }: EquipmentPageProps): Promise<JSX.Element> => {
  const heads = ['Name', 'Type', 'Status', 'Department', 'Acquisition date'];
  const title = 'Equipment';
  const addButton = <CreateEquipmentModal />;
  const { data } = await EquipmentServices.getAll(query);
  const entries = data as PaginatedResponse<Equipment>;
  const tableBody = <Body data={entries.items} />;
  const filters = <Filters />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.equipment} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody, filters, totalItems }} />;
    </PrivateRouteContainer>
  );
};
