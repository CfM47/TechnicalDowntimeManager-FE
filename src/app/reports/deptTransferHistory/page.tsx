import { DeptTransferHistoryPage } from '@/components/pages/deptTransferHistory';
import { TransferQuery } from '@/types/transfer';

/**
 * DeptTransferhistoryPage component.
 *
 * This is an asynchronous function that retrieves search parameters and renders the TransferHistoryPage component with the retrieved query.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to a TransferQuery object containing the search parameters.
 *
 * @returns A JSX element that renders the TransferPage component with the provided query.
 */
export default async function DeptTrasladosPage(props: {
  searchParams?: Promise<Pick<TransferQuery, 'id_receiver_dep' | 'page' | 'size'>>;
}) {
  const searchParams = await props.searchParams;
  return <DeptTransferHistoryPage query={searchParams} />;
}
