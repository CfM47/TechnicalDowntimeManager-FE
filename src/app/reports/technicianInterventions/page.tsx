import { TechnicianInterventionsPage } from '@/components/pages/technicianInterventions';
import { TechnicianQuery } from '@/types/technician';

export default async function TecnicosPage(props: {
  searchParams?: Promise<Pick<TechnicianQuery, 'id_user' | 'page' | 'size'>>;
}) {
  const searchParams = await props.searchParams;
  return <TechnicianInterventionsPage query={searchParams} />;
}
