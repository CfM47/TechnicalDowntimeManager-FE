import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateEquipmentModal } from '@/components/modals/create-equipment-modal';
import mockEquipment from '@/mock/mockEquipment.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface EquipmentPageProps {}

export const EquipmentPage = ({}: EquipmentPageProps) => {
  const heads = ['Nombre', 'Tipo', 'Estado', 'Departamento', 'Fecha de adquisición'];
  const title = 'Equipos';
  const addButton = <CreateEquipmentModal />;
  const tableBody = <Body data={mockEquipment} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
