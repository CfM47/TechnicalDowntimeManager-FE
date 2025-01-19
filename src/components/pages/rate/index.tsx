import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateRateModal } from '@/components/modals/create-rate-modal';
import mockRate from '@/mock/mockRate.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RatePageProps {}

export const RatePage = ({}: RatePageProps) => {
  const heads = ['Valorador', 'Valorado', 'Fecha', 'Comentario', 'Puntuación'];
  const title = 'Valoraciones';
  const addButton = <CreateRateModal />;
  const tableBody = <Body data={mockRate} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
