import { UserPage } from '@/components/pages/user';
import { UserQuery } from '@/types/user';

export default async function UsuariosPage(props: { searchParams?: Promise<UserQuery> }) {
  const searchParams = await props.searchParams;
  return <UserPage query={searchParams} />;
}
