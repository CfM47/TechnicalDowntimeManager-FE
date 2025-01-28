import { MaintenancesPage } from '@/components/pages/maintenances';
import { MaintenanceQuery } from '@/types/maitenance';

/**
 * TrasladosPage component.
 *
 * This is an asynchronous function that retrieves search parameters and renders the MaintenancesPage component with the retrieved query.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to a MaintenanceQuery object containing the search parameters.
 *
 * @returns A JSX element that renders the MaintenancesPage component with the provided query.
 */
export default async function MantenimientosPage(props: {
  searchParams?: Promise<MaintenanceQuery>;
}) {
  const searchParams = await props.searchParams;
  return <MaintenancesPage query={searchParams} />;
}
