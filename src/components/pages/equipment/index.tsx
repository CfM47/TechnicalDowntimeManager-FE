import { Body } from './components/Body';
import { MenuContent } from './components/MenuContent';

import { EntityPage } from '@/components/common/entity-page';
import { Button } from '@/components/ui/button';
import mockEquipment from '@/mock/mockEquipment.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface EquipmentPageProps {}

export const EquipmentPage = ({}: EquipmentPageProps) => {
  const heads = ['Nombre', 'Tipo', 'Estado', 'Departamento', 'Fecha de adquisición'];
  const title = 'Equipos';
  const menuContent = <MenuContent />;
  const addButton = <Button>Añadir</Button>;
  const tableBody = <Body data={mockEquipment} menuContent={menuContent} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
