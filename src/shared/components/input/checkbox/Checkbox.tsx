import React, { InputHTMLAttributes, FC } from 'react';
import { CSSProperties } from 'styled-components';

import {
  Container,
  Text,
} from './styles';

interface PCheckBox extends InputHTMLAttributes<HTMLInputElement>{
  idCheckbox?: string;
  text?: string;
  style?: CSSProperties;
}

const Checkbox: FC<PCheckBox> = ({
  text,
  style,
  idCheckbox,
  ...props
}: PCheckBox) => (
  <Container style={style}>
    <input type="checkbox" id={idCheckbox} {...props} />
    <Text htmlFor={idCheckbox}>
      {text}
    </Text>
  </Container>
);

Checkbox.defaultProps = {
  text: '',
  idCheckbox: '',
  style: {},
};


export default Checkbox;
