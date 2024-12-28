import { Body } from './components/Body';
import { MenuContent } from './components/MenuContent';

import { EntityPage } from '@/components/common/entity-page';
import { Button } from '@/components/ui/button';
import { mockDowntimes } from '@/mock/tables';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DowntimesPageProps {}

export const DowntimesPage = ({}: DowntimesPageProps) => {
  const heads = ['Remitente', 'Equipo', 'Destino', 'Receptor', 'Fecha'];
  const title = 'Bajas';
  const menuContent = <MenuContent />;
  const addButton = <Button>Añadir</Button>;
  const tableBody = <Body {...{ menuContent, data: mockDowntimes }} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
