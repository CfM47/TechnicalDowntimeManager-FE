import { EntitiesPage } from '../components/EntitiesPage';
import { Body } from './components/Body';
import { MenuContent } from './components/MenuContent';

import { Button } from '@/components/ui/button';
import { mockMaintenances } from '@/mock/tables';

export default function TrasladosPage() {
  const heads = ['Técnico', 'Equipo', 'Costo', 'Tipo', 'Fecha'];
  const title = 'Traslados';
  const menuContent = <MenuContent />;
  const addButton = <Button>Añadir</Button>;
  const tableBody = <Body {...{ menuContent, data: mockMaintenances }} />;

  return <EntitiesPage {...{ title, heads, addButton, tableBody }} />;
}
