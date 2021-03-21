import React, { MouseEventHandler, ReactNode } from 'react';
import Button from '../../buttons/Button';

import Modal from '../Modal';
import {
  TitleModal,
  BoxButtons,
  Paragraph,
} from './styles';

interface PModalConfirm {
    open: boolean;
    onClose: MouseEventHandler;
    title: string;
    message: string | ReactNode;
    onClickSecondary?: MouseEventHandler;
    onClickPrimary: MouseEventHandler;
    loadingPrimary: boolean;
    textSecondary?: string;
    textPrimary?: string;
    disabledPrimary?: boolean;
}

const ModalConfirm = ({
  open,
  onClose,
  title,
  message,
  onClickSecondary,
  onClickPrimary,
  loadingPrimary,
  textSecondary,
  textPrimary,
  disabledPrimary,
}: PModalConfirm) => {
  if (!open) {
    return null;
  }

  return (
    <Modal open={open} onClose={onClose}>
      <TitleModal>
        {title}
      </TitleModal>
      <Paragraph>
        {message}
      </Paragraph>
      <BoxButtons>
        <Button
          onClick={onClickSecondary}
          type="primary-white"
          style={{ width: 120 }}
        >
          {textSecondary}
        </Button>
        <Button
          loading={loadingPrimary}
          onClick={onClickPrimary}
          style={{ width: 120, marginLeft: 16 }}
          disabled={disabledPrimary}
        >
          {textPrimary}
        </Button>
      </BoxButtons>
    </Modal>
  );
};

ModalConfirm.defaultProps = {
  onClickSecondary: () => null,
  textSecondary: 'NÃO',
  textPrimary: 'SIM',
  disabledPrimary: false,
};

export default ModalConfirm;
