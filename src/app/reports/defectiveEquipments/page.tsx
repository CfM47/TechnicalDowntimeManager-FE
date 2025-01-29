import { DefectiveEquipmentsPage } from '@/components/pages/defectiveEquipments';
import { PaginationQuery } from '@/services/routes/types';

export default async function Page(props: { searchParams?: Promise<PaginationQuery> }) {
  const searchParams = await props.searchParams;
  return <DefectiveEquipmentsPage query={searchParams} />;
}
