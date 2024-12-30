import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface EyeOffButtonProps {
  isShow: boolean;
  toggleShow: () => void;
}

export const EyeOffButton = ({ isShow, toggleShow }: EyeOffButtonProps) => {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
      onClick={toggleShow}
      aria-label={isShow ? 'Hide password' : 'Show password'}
    >
      {isShow ? (
        <EyeOff className="h-4 w-4 text-gray-500" />
      ) : (
        <Eye className="h-4 w-4 text-gray-500" />
      )}
    </Button>
  );
};
