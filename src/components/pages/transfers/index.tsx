import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateTransferModal } from '@/components/modals/create-transfer-modal';
import mockTransfers from '@/mock/mockTransfer.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TransfersPageProps {}

export const TransfersPage = ({}: TransfersPageProps) => {
  const heads = ['Remitente', 'Origen', 'Destino', 'Receptor', 'Fecha', 'Estado'];
  const title = 'Traslados';
  const addButton = <CreateTransferModal />;
  const tableBody = <Body data={mockTransfers} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
