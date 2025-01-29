import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

/**
 * @interface ReportCardProps
 * @property {string} title - El título del reporte.
 * @property {string} description - La descripción del reporte.
 * @property {() => void} onGenerate - Función que se ejecuta al hacer clic en el botón "Generar".
 * @property {string} route - Ruta donde se visualizará el reporte
 */
interface ReportCardProps {
  title: string;
  description: string;
  route?: string;
}

/**
 * Componente `ReportCard` que muestra una tarjeta con un título, descripción y un botón para generar un reporte.
 * @param {ReportCardProps} props - Las propiedades del componente `ReportCard`.
 * @param {string} props.title - El título del reporte.
 * @param {string} props.description - La descripción del reporte.
 * @param {() => void} props.onGenerate - Función que se ejecuta al hacer clic en el botón "Generar".
 * @returns {JSX.Element} - El componente `ReportCard`.
 */
export const ReportCard = ({ title, description, route }: ReportCardProps) => {
  return (
    <Card className="w-full max-w mx-auto rounded-lg shadow-lg bg-white p-2">
      <CardContent>
        <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-base mb-6">{description}</p>
        <div className="flex justify-end ">
          <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            <Link href={route ?? '/'}>Generate</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
