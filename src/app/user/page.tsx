import { UserPage } from '@/components/pages/user';
import { UserQuery } from '@/types/user';

/**
 * The `UsuariosPage` component is an asynchronous function that retrieves user query parameters
 * and renders the `UserPage` component with the retrieved query.
 *
 * @param props - The properties object.
 * @param props.searchParams - A promise that resolves to the user query parameters.
 * @returns A JSX element that renders the `UserPage` component with the provided query parameters.
 */
export default async function UsuariosPage(props: { searchParams?: Promise<UserQuery> }) {
  const searchParams = await props.searchParams;
  return <UserPage query={searchParams} />;
}
