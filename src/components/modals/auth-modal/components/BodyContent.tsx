import { TabListContainer } from '@/components/containers/tab-list-container';
import { SignInForm } from '@/components/forms/sign-in';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BodyContentProps {}

export const BodyContent = ({}: BodyContentProps) => {
  const tabsDefinition = [{ value: 'signin', label: 'Iniciar sesión' }];
  const tabsComponents = {
    signin: <SignInForm />
  };

  return <TabListContainer {...{ tabsDefinition, tabsComponents }} />;
};
