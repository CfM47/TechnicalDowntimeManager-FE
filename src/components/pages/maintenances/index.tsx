import { Body } from './components/Body';
import { MenuContent } from './components/MenuContent';

import { EntityPage } from '@/components/common/entity-page';
import { Button } from '@/components/ui/button';
import mockMaintenances from '@/mock/mockMaintenances.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MaintenancesPageProps {}

export const MaintenancesPage = ({}: MaintenancesPageProps) => {
  const heads = ['Técnico', 'Equipo', 'Costo', 'Tipo', 'Fecha'];
  const title = 'Mantenimientos';
  const menuContent = <MenuContent />;
  const addButton = <Button>Añadir</Button>;
  const tableBody = <Body data={mockMaintenances} menuContent={menuContent} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
