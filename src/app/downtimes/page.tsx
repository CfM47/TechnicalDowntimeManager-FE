import { DowntimesPage } from '@/components/pages/downtimes';
import { DowntimeQuery } from '@/types/downtime';

/**
 * Asynchronous component that fetches downtime query parameters and renders the DowntimesPage component.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to a DowntimeQuery object containing search parameters.
 * @returns A JSX element representing the DowntimesPage component with the provided query parameters.
 */
export default async function Downtimes(props: { searchParams?: Promise<DowntimeQuery> }) {
  const searchParams = await props.searchParams;
  return <DowntimesPage query={searchParams} />;
}
