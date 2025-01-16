import { Body } from './components/Body';
import { MenuContent } from './components/MenuContent';

import { EntityPage } from '@/components/common/entity-page';
import { Button } from '@/components/ui/button';
import { mockRate } from '@/mock/tables';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RatePageProps {}

export const RatePage = ({}: RatePageProps) => {
  const heads = ['Valorador', 'Valorado', 'Fecha', 'Comentario', 'Puntuación'];
  const title = 'Valoraciones';
  const menuContent = <MenuContent />;
  const addButton = <Button>Añadir</Button>;
  const tableBody = <Body {...{ menuContent, data: mockRate }} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
