import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateEquipmentModal } from '@/components/modals/create-equipment-modal';
import { EquipmentServices } from '@/services/features/equipment';
import { Equipment } from '@/types/equipment';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface EquipmentPageProps {}

export const EquipmentPage = async ({}: EquipmentPageProps) => {
  const heads = ['Nombre', 'Tipo', 'Estado', 'Departamento', 'Fecha de adquisición'];
  const title = 'Equipos';
  const addButton = <CreateEquipmentModal />;
  const { data } = await EquipmentServices.getAll();
  const entries = data as Equipment[];
  const tableBody = <Body data={entries} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
