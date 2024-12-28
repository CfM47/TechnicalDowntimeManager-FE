import { Body } from './components/Body';
import { MenuContent } from './components/MenuContent';

import { EntityPage } from '@/components/common/entity-page';
import { Button } from '@/components/ui/button';
import { mockTransfers } from '@/mock/tables';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TransfersPageProps {}

export const TransfersPage = ({}: TransfersPageProps) => {
  const heads = ['Remitente', 'Origen', 'Destino', 'Fecha', 'Estado'];
  const title = 'Traslados';
  const menuContent = <MenuContent />;
  const addButton = <Button>Añadir</Button>;
  const tableBody = <Body {...{ menuContent, data: mockTransfers }} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
