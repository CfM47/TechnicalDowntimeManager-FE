import { EntitiesPage } from '../components/EntitiesPage';
import { Body } from './components/Body';
import { MenuContent } from './components/MenuContent';

import { Button } from '@/components/ui/button';
export interface Traslado {
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
  const heads = ['ID', 'Fecha', 'Origen', 'Destino'];
  const title = 'Traslados';
  const menuContent = <MenuContent />;
  const addButton = <Button>Añadir</Button>;
  const tableBody = <Body {...{ menuContent, data }} />;

  return <EntitiesPage {...{ title, heads, addButton, tableBody }} />;
}
