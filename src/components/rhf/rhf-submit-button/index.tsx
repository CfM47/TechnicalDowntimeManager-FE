import { Loader2 } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RHFSubmitButtonProps {
  children: React.ReactNode;
  isSubmitting?: boolean;
}

export const RHFSubmitButton = ({ children, isSubmitting }: RHFSubmitButtonProps) => {
  const { formState } = useFormContext();
  const { isDirty, isValid } = formState;

  console.log('state', { isDirty, isValid, isSubmitting });

  const disabled = !isDirty || !isValid || isSubmitting;

  return (
    <Button type="submit" variant="default" disabled={disabled} className="flex justify-center">
      {isSubmitting ? <Loader2 className="animate-spin" /> : children}
    </Button>
  );
};
