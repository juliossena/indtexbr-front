import React, { MouseEventHandler, ReactNode } from 'react';

import {
  Container,
  BoxChildren,
  Shadow,
} from './styles';

interface PModal {
    open: boolean;
    children: ReactNode;
    onClose: MouseEventHandler;
}

const Modal = ({ open, children, onClose }: PModal) => {
  if (!open) {
    return null;
  }

  return (
    <Container>
      <Shadow onClick={onClose} />
      <BoxChildren>
        {children}
      </BoxChildren>
    </Container>
  );
};


export default Modal;
