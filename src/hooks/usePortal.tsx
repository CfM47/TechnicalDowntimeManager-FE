import { RefCallback, useState } from 'react';
import { createPortal } from 'react-dom';

export interface Portal {
  ref: RefCallback<HTMLElement>;
  getPortal: (node: React.ReactElement) => React.ReactNode;
}

export const usePortal = (): Portal => {
  const [element, setElement] = useState<HTMLElement>();

  return {
    ref: (el) => {
      if (!element && el) {
        setElement(el);
      }
    },
    getPortal: (node) => element && createPortal(node, element)
  };
};
