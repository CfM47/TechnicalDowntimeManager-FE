import { Id, toast, ToastContent, ToastOptions } from 'react-toastify';

const defaultOptions: ToastOptions = {
  type: 'success',
  position: 'top-right',
  autoClose: 5000,
  closeButton: true,
  closeOnClick: true,
  draggable: true,
  draggablePercent: 20
};

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  const optionsToApply = { ...defaultOptions, ...options };

  return toast(content, {
    ...optionsToApply,
    type
  });
};
