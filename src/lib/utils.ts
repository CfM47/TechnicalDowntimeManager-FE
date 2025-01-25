import 'dayjs/locale/es'; // Importa español u otro idioma que necesites
import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  const [firstName, lastName] = name.split(' ');
  const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
  const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
  return `${firstInitial}${lastInitial}`;
}

dayjs.extend(localizedFormat);
/**
 * Formatea una fecha usando Day.js
 * @param {string | Date} dateString - La fecha en formato ISO o un objeto Date
 * @param {string} format - El formato deseado (opcional)
 * @param {string} locale - El idioma (opcional, por defecto 'es')
 * @returns {string} - Fecha formateada
 */
export function formatDate(dateString, format = 'DD/MM/YYYY', locale = 'es') {
  return dayjs(dateString).locale(locale).format(format);
}
