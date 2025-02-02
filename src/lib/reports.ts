export interface Report {
  title: string;
  description: string;
  route?: string;
}

export const reports: Report[] = [
  {
    title: 'Last Year Downtimes',
    description:
      'List of equipment decommissioned in the last year, including the reason for decommissioning, the final destination, and the name of the person who received the equipment.',
    route: '/reports/lastYearDowntimes'
  },
  {
    title: 'Maintenance history report',
    description:
      'Maintenance history of a specific equipment, classifying the maintenance by type and date, along with the technicians who performed the interventions.',
    route: '/reports/maintenanceHistory'
  },
  {
    title: 'Equipment Transfer Record',
    description:
      'Equipment that has been transferred between different sections, indicating the dates, origin, destination, and the names of the person sending and the person receiving the equipment.',
    route: '/reports/transferHistory'
  },
  {
    title: '4th Report',
    description:
      'Given a specific technician, retrieve their history of interventions (maintenance or deactivations) and the ratings received for their work.'
  },
  {
    title: 'Defective Equipments Report',
    description:
      'Equipment that has undergone more than three maintenance interventions in the last year and, according to regulations, must be replaced.',
    route: '/reports/defectiveEquipments'
  },
  {
    title: 'Technicians Performance',
    description:
      'Comparison of technicians performance, based on the ratings received and the number of interventions performed, to determine bonuses or penalties in their salary.',
    route: '/reports/techniciansPerformance'
  },
  {
    title: 'Department Transfer Record',
    description:
      'Equipments that has been sent to a specific department, indicating the names of the sender and the recipient.',
    route: '/reports/deptTransferHistory'
  }
];
