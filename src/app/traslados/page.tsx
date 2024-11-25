import { EntitiesPage } from '../components/EntitiesPage';
import { TableHeader } from '../components/EntityTable';
interface Traslado {
  id: number;
  fecha: string;
  origen: string;
  destino: string;
}
export default function TrasladosPage() {
  // data is mocked
  const data = [
    { id: 1, fecha: '2021-01-01', origen: 'Bodega 1', destino: 'Bodega 2' },
    { id: 2, fecha: '2021-01-02', origen: 'Bodega 2', destino: 'Bodega 3' },
    { id: 3, fecha: '2021-01-03', origen: 'Bodega 3', destino: 'Bodega 4' },
    { id: 4, fecha: '2021-01-01', origen: 'Bodega 1', destino: 'Bodega 2' },
    { id: 5, fecha: '2021-01-02', origen: 'Bodega 2', destino: 'Bodega 3' },
    { id: 6, fecha: '2021-01-03', origen: 'Bodega 3', destino: 'Bodega 4' },
    { id: 7, fecha: '2021-01-01', origen: 'Bodega 1', destino: 'Bodega 2' },
    { id: 8, fecha: '2021-01-02', origen: 'Bodega 2', destino: 'Bodega 3' },
    { id: 9, fecha: '2021-01-03', origen: 'Bodega 3', destino: 'Bodega 4' },
    { id: 10, fecha: '2021-01-01', origen: 'Bodega 1', destino: 'Bodega 2' },
    { id: 11, fecha: '2021-01-02', origen: 'Bodega 2', destino: 'Bodega 3' },
    { id: 12, fecha: '2021-01-03', origen: 'Bodega 3', destino: 'Bodega 4' }
  ];
  const headers: TableHeader<Traslado>[] = [
    { key: 'id', label: 'ID' },
    { key: 'fecha', label: 'Fecha' },
    { key: 'origen', label: 'Origen' },
    { key: 'destino', label: 'Destino' }
  ];
  const title = 'Traslados';

  return <EntitiesPage<Traslado> {...{ title, data, headers }}></EntitiesPage>;
}
