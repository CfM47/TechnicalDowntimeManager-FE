import { Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RemoveIconButtonProps {}

export const RemoveIconButton = ({}: RemoveIconButtonProps) => {
  return (
    <Button
      size="icon"
      variant="outline"
      className="text-red-500 border-red-500 rounded-full hover:bg-red-100 hover:text-red-600 hover:border-red-600 transition-colors"
    >
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">Eliminar</span>
    </Button>
  );
};
