import { TabListContainer } from '@/components/containers/tab-list-container';
import { SignInForm } from '@/components/forms/sign-in';
import { SignUpForm } from '@/components/forms/sign-up';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BodyContentProps {}

export const BodyContent = ({}: BodyContentProps) => {
  const tabsDefinition = [
    { value: 'signin', label: 'Iniciar sesión' },
    { value: 'signup', label: 'Registrarse' }
  ];
  const tabsComponents = {
    signin: <SignInForm />,
    signup: <SignUpForm />
  };

  return <TabListContainer {...{ tabsDefinition, tabsComponents }} />;
};
