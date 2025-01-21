import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { CreateUserModal } from '@/components/modals/create-user-modal';
import { UserServices } from '@/services/features/user';
import { User } from '@/types/user';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UserPageProps {}

export const UserPage = async ({}: UserPageProps) => {
  const heads = ['Nombre', 'Departamento', 'Rol'];
  const title = 'Usuarios';
  const addButton = <CreateUserModal />;
  const { data } = await UserServices.getAll();
  const entries = data as User[];
  const tableBody = <Body data={entries} />;

  return <EntityPage {...{ title, heads, addButton, tableBody }} />;
};
