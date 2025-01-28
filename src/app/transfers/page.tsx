import { TransfersPage } from '@/components/pages/transfers';
import { TransferQuery } from '@/types/transfer';

/**
 * Asynchronous function component that renders the TransfersPage component.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to a TransferQuery object.
 *
 * @returns A JSX element that renders the TransfersPage component with the resolved searchParams.
 */
export default async function TrasladosPage(props: { searchParams?: Promise<TransferQuery> }) {
  const searchParams = await props.searchParams;
  return <TransfersPage query={searchParams} />;
}
