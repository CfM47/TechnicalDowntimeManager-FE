import { EquipmentPage } from '@/components/pages/equipment';
import { EquipmentQuery } from '@/types/equipment';

/**
 * EquiposPage component fetches the search parameters asynchronously and renders the EquipmentPage component.
 *
 * @param {Object} props - The properties object.
 * @param {Promise<EquipmentQuery>} [props.searchParams] - A promise that resolves to the search parameters for the equipment query.
 * @returns {JSX.Element} The rendered EquipmentPage component with the provided query.
 */
export default async function EquiposPage(props: { searchParams?: Promise<EquipmentQuery> }) {
  const searchParams = await props.searchParams;
  return <EquipmentPage query={searchParams} />;
}
