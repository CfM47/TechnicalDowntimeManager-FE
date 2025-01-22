import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateDowntimeModal } from '@/components/modals/create-downtime-modal';
import { DowntimeServices } from '@/services/features/downtime';
import { Downtime } from '@/types/downtime';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DowntimesPageProps {}

export const DowntimesPage = async ({}: DowntimesPageProps) => {
  const heads = ['Remitente', 'Equipo', 'Destino', 'Receptor', 'Fecha'];
  const title = 'Bajas';
  const addButton = <CreateDowntimeModal />;
  const { data } = await DowntimeServices.getAll();
  const entries = data as Downtime[];
  const tableBody = <Body data={entries} />;
  const authorizedRoles = [1, 3];

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRoles} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody }} />;
    </PrivateRouteContainer>
  );
};
