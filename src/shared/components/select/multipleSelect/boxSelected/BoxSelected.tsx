import React from 'react';
import IconClose from '../../../../images/icon/iconClose';
import ButtonIcon from '../../../buttons/buttonIcon/ButtonIcon';

import {
    Container,
} from './styles';

interface PBoxSelected {
    text: string;
    onClick: () => void;
}

const BoxSelected = ({ text, onClick }: PBoxSelected) => (
  <Container>
    {text}
    <ButtonIcon type="button" onClick={onClick} height={16}>
      <IconClose style={{ marginLeft: 4 }} />
    </ButtonIcon>
  </Container>
);

export default BoxSelected;
