export interface Report {
  title: string;
  description: string;
}

export const reports: Report[] = [
  {
    title: 'Reporte 1',
    description:
      'Listado de los equipos dados de baja en el último año, incluyendo la causa de la baja, el destino final y el nombre de la persona que recibió el equipo.'
  },
  {
    title: 'Reporte 2',
    description:
      'Historial de los mantenimientos de un equipo específico, clasificando los mantenimientos por tipo y fecha, junto con los técnicos que realizaron las intervenciones.'
  },
  {
    title: 'Reporte 3',
    description:
      'Equipos que han sido trasladados entre diferentes secciones, indicando las fechas, el origen, el destino, los nombres de la persona que envía y de la persona que recibe el equipo.'
  },
  {
    title: 'Reporte 4',
    description:
      'Dado un técnico dado, obtener su historial de intervenciones (mantenimientos o bajas) y las valoraciones recibidas por su trabajo.'
  },
  {
    title: 'Reporte 5',
    description:
      'Equipos que han recibido más de tres mantenimientos en el último año y que, por normativa, deben ser reemplazados.'
  },
  {
    title: 'Reporte 6',
    description:
      'Comparación del rendimiento de los técnicos, basándose en las valoraciones recibidas y la cantidad de intervenciones realizadas, para determinar bonificaciones o penalizaciones en su salario.'
  },
  {
    title: 'Reporte 7',
    description:
      'Equipos que han sido enviados a un departamento específico, indicando los nombres de la persona quien envía y quien recibe.'
  }
];
