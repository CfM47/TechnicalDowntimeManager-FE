import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateTransferModal } from '@/components/modals/create-transfer-modal';
import { TransferServices } from '@/services/features/transfer';
import { Transfer } from '@/types/transfer';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TransfersPageProps {}

export const TransfersPage = async ({}: TransfersPageProps) => {
  const heads = ['Remitente', 'Origen', 'Destino', 'Receptor', 'Fecha', 'Estado'];
  const title = 'Traslados';
  const addButton = <CreateTransferModal />;
  const { data } = await TransferServices.getAll();
  const entries = data as Transfer[];

  const tableBody = <Body data={entries} />;
  const authorizedRoles = [1, 3];

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRoles} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody }} />;
    </PrivateRouteContainer>
  );
};
