import { TransferHistoryPage } from '@/components/pages/transferHistory';
import { TransferQuery } from '@/types/transfer';

/**
 * TransferhistoryPage component.
 *
 * This is an asynchronous function that retrieves search parameters and renders the TransferHistoryPage component with the retrieved query.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to a TransferQuery object containing the search parameters.
 *
 * @returns A JSX element that renders the TransferPage component with the provided query.
 */
export default async function TrasladosPage(props: {
  searchParams?: Promise<Pick<TransferQuery, 'id_equipment' | 'page' | 'size'>>;
}) {
  const searchParams = await props.searchParams;
  return <TransferHistoryPage query={searchParams} />;
}
