import { MaintenanceHistoryPage } from '@/components/pages/maintenanceHistory';
import { MaintenanceQuery } from '@/types/maitenance';

/**
 * MaintenancehistoryPage component.
 *
 * This is an asynchronous function that retrieves search parameters and renders the MaintenanceHistoryPage component with the retrieved query.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to a MaintenanceQuery object containing the search parameters.
 *
 * @returns A JSX element that renders the MaintenancesPage component with the provided query.
 */
export default async function MantenimientosPage(props: {
  searchParams?: Promise<Pick<MaintenanceQuery, 'id_equipment' | 'page' | 'size'>>;
}) {
  const searchParams = await props.searchParams;
  return <MaintenanceHistoryPage query={searchParams} />;
}
