import { Button } from '@/components/ui/button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FooterContentProps {}

export const FooterContent = ({}: FooterContentProps) => {
  return (
    <Button type="submit" className="w-full">
      Sign In
    </Button>
  );
};
