import { Body } from './components/Body';
import { Filters } from './components/Filters';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { authorizedRolesByRoute } from '@/lib/constants';
import { PaginatedResponse } from '@/services/api/api';
import { TransferServices } from '@/services/features/transfer';
import { Transfer, TransferQuery } from '@/types/transfer';

/**
 * Represents the query parameters for the TransferHistoryPage component.
 * @interface TransferHistoryPage
 * @property {Pick<TransferQuery, 'id_receiver_dep' | 'page' | 'size'>} [query] -
 * Optional query parameters including equipment ID, page number, and page size.
 */
interface DeptTransferHistoryPage {
  query?: Pick<TransferQuery, 'id_receiver_dep' | 'page' | 'size'>;
}

/**
 * Asynchronous component that renders the Transfer History Page.
 *
 * This page displays a paginated table of transfer records, including information
 * about the sender, origin department, destination department, receiver, and date.
 * The data is fetched from the TransferServices API, and filters can be applied.
 *
 * @param {TransferHistoryPage} props - The properties for the TransferHistoryPage component.
 * @param {Pick<TransferQuery, 'id_receiver_dep' | 'page' | 'size'>} [props.query] -
 * The query parameters for fetching transfer data.
 *
 * @returns {Promise<JSX.Element>} The rendered Transfer History Page component.
 */
export const DeptTransferHistoryPage = async ({
  query
}: DeptTransferHistoryPage): Promise<JSX.Element> => {
  const heads = ['Sender', 'Receiver', 'Origin Department', 'Equipment'];
  const title = 'Department Transfers Record';

  // Fetch transfer data if an equipment ID is provided, otherwise return an empty list.
  const { data } = query?.id_receiver_dep
    ? await TransferServices.getAll(query)
    : { data: { items: [], page: 1, size: 10, total: 0 } };

  const entries = data as PaginatedResponse<Transfer>;
  const tableBody = <Body data={entries.items} />;
  const totalItems = entries.total;
  const filters = <Filters />;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.maintenances} redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems, filters }} />
    </PrivateRouteContainer>
  );
};
