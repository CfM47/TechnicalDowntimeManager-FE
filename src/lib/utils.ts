import { showToast } from '@/components/common/toast-message';
import { type ClassValue, clsx } from 'clsx';
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

export const toastRequest = async (
  succesMessage: string = 'Operación realizada con éxito',
  errorMessage: string = 'Ha ocurrido un error',
  request: () => Promise<void>
) => {
  try {
    await request();
    showToast('success', succesMessage);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    showToast('error', errorMessage);
  }
};
