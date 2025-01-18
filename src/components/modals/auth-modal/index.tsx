import { BodyContent } from './components/BodyContent';
import { FooterContent } from './components/FooterContent';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { ButtonProps } from '@/components/ui/button';

export function AuthModal() {
  const title = 'Bienvenido!';
  const triggerProps: ButtonProps = {
    ...regularModalButtonProps,
    children: 'Iniciar sesión'
  };
  const description = 'Inicia sesión en tu cuenta o crea una nueva registrándote';
  const bodyContent = <BodyContent />;
  const footerContent = <FooterContent />;
  return <Modal {...{ title, triggerProps, description, bodyContent, footerContent }}></Modal>;
}
