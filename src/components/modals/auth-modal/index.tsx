import { BodyContent } from './components/BodyContent';
import { FooterContent } from './components/FooterContent';

import { Modal } from '@/components/common/modal';

export function AuthModal() {
  const title = 'Bienvenido!';
  const triggerLabel = 'Iniciar sesión';
  const description = 'Inicia sesión en tu cuenta o crea una nueva registrándote';
  const bodyContent = <BodyContent />;
  const footerContent = <FooterContent />;
  return <Modal {...{ title, triggerLabel, description, bodyContent, footerContent }}></Modal>;
}
