import { LastYearDowntimesPage } from '@/components/pages/lastYearDowntimes';
import { PaginationQuery } from '@/services/routes/types';

export default async function Page(props: { searchParams?: Promise<PaginationQuery> }) {
  const searchParams = await props.searchParams;
  return <LastYearDowntimesPage query={searchParams} />;
}
