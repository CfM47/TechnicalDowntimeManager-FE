import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateMaintenanceModal } from '@/components/modals/create-maintenance-modal';
import mockMaintenances from '@/mock/mockMaintenances.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MaintenancesPageProps {}

export const MaintenancesPage = ({}: MaintenancesPageProps) => {
  const heads = ['Técnico', 'Equipo', 'Costo', 'Tipo', 'Fecha'];
  const title = 'Mantenimientos';
  const addButton = <CreateMaintenanceModal />;
  const tableBody = <Body data={mockMaintenances} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
