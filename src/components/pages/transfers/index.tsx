import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateTransferModal } from '@/components/modals/create-transfer-modal';
import { Filters } from '@/components/pages/transfers/components/Filters';
import { PaginatedResponse } from '@/services/api/api';
import { TransferServices } from '@/services/features/transfer';
import { Transfer, TransferQuery } from '@/types/transfer';

/**
 * Props for the TransfersPage component.
 *
 * @interface TransfersPageProps
 * @property {TransferQuery} query - Optional query parameters for the transfers page.
 */
interface TransfersPageProps {
  query?: TransferQuery;
}

/**
 * TransfersPage component fetches and displays a list of transfers.
 *
 * @param {TransfersPageProps} props - The properties for the TransfersPage component.
 * @param {object} props.query - The query parameters for fetching transfers.
 * @returns {Promise<JSX.Element>} The rendered TransfersPage component.
 *
 * @example
 * <TransfersPage query={{ status: 'Pending' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the transfer data in a table format.
 */
export const TransfersPage = async ({ query }: TransfersPageProps): Promise<JSX.Element> => {
  const heads = ['Sender', 'Origin', 'Destiny', 'Receiver', 'Date', 'Status'];
  const title = 'Transfer';
  const addButton = <CreateTransferModal />;
  const { data } = await TransferServices.getAll(query);
  const entries = data as PaginatedResponse<Transfer>;
  const tableBody = <Body data={entries.items} />;
  const filters = <Filters />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, addButton, tableBody, filters, totalItems }} />;
    </PrivateRouteContainer>
  );
};
