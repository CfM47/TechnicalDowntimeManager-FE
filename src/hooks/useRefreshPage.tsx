import { showToast } from '@/components/common/toast-message';
import { useRouter } from 'next/navigation';

export const useRefreshPage = () => {
  const router = useRouter();

  const submitRequest = async (
    successMessage: string = 'Operación realizada con éxito',
    errorMessage: string = 'Ha ocurrido un error',
    request: () => Promise<void>
  ) => {
    try {
      await request();
      showToast('success', successMessage);
      router.refresh(); // Refresca la página después de una operación exitosa
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast('error', errorMessage);
    }
  };

  return { submitRequest };
};
