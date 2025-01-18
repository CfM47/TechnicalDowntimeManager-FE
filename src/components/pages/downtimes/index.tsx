import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateDowntimeModal } from '@/components/modals/create-downtime-modal';
import mockDowntimes from '@/mock/mockDowntimes.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DowntimesPageProps {}

export const DowntimesPage = ({}: DowntimesPageProps) => {
  const heads = ['Remitente', 'Equipo', 'Destino', 'Receptor', 'Fecha'];
  const title = 'Bajas';
  const addButton = <CreateDowntimeModal />;
  const tableBody = <Body data={mockDowntimes} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
