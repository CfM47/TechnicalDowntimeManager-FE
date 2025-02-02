import { TechniciansPerformancePage } from '@/components/pages/techniciansPerformance';
import { PaginationQuery } from '@/services/routes/types';

/**
 * Page component for displaying the Technicians Performance page.
 *
 * @param {object} props - The properties for the Page component.
 * @param {Promise<PaginationQuery>} [props.searchParams] - Optional search parameters for pagination.
 * @returns {Promise<JSX.Element>} The rendered Technicians Performance page component.
 *
 * @example
 * <Page searchParams={fetchSearchParams()} />
 */
export default async function Page(props: { searchParams?: Promise<PaginationQuery> }) {
  const searchParams = await props.searchParams;
  return <TechniciansPerformancePage query={searchParams} />;
}
