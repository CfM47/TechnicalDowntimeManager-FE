import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateMaintenanceModal } from '@/components/modals/create-maintenance-modal';
import { MaintenanceServices } from '@/services/features/maintenance';
import { Maintenance } from '@/types/maitenance';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MaintenancesPageProps {}

export const MaintenancesPage = async ({}: MaintenancesPageProps) => {
  const heads = ['Técnico', 'Equipo', 'Costo', 'Tipo', 'Fecha'];
  const title = 'Mantenimientos';
  const addButton = <CreateMaintenanceModal />;
  const { data } = await MaintenanceServices.getAll();
  const entries = data as Maintenance[];
  const tableBody = <Body data={entries} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
