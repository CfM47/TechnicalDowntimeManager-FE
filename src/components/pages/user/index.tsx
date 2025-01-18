import { Body } from './components/Body';
import { RowActions } from './components/RowActions';

import { EntityPage } from '@/components/common/entity-page';
import { CreateUserModal } from '@/components/modals/create-user-modal';
import mockUser from '@/mock/mockUser.json';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserPageProps {}

export const UserPage = ({}: UserPageProps) => {
  const heads = ['Nombre', 'Departamento', 'Rol'];
  const title = 'Usuarios';
  const menuContent = <RowActions />;
  const addButton = <CreateUserModal />;
  const tableBody = <Body data={mockUser} menuContent={menuContent} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
