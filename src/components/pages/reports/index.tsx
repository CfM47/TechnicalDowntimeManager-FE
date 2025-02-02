import { ReportCard } from '@/components/common/report-card';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { reports } from '@/lib/reports';

/**
 * Componente `ReportPage` que muestra una lista de tarjetas de reporte.
 *
 * Este componente obtiene información de los reportes desde un archivo JSON y renderiza
 * una cuadrícula de componentes `ReportCard`, cada uno mostrando el título y la descripción de un reporte.
 *
 * @returns {JSX.Element} - El componente `ReportPage`.
 */
export const ReportPage = () => {
  const authorizedRoles = [1];
  return (
    <PrivateRouteContainer authorizedRoles={authorizedRoles} redirect>
      <section className="container mx-auto min-h-screen p-1">
        <h2 className="text-black text-3xl font-semibold sm:text-4xl lg:text-5xl text-left mb-8">
          Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {reports.map((data, index) => (
            <ReportCard
              key={index}
              title={data.title}
              description={data.description}
              route={data.route}
            />
          ))}
        </div>
      </section>
    </PrivateRouteContainer>
  );
};
