import React, { InputHTMLAttributes, FC } from 'react';
import { CSSProperties } from 'styled-components';

import {
  Container,
  Text,
  Radio,
  SubText,
} from './styles';

interface PInputRadio extends InputHTMLAttributes<HTMLInputElement>{
  idRadio?: string;
  nameRadio?: string;
  text?: string;
  subtext?: string;
  style?: CSSProperties;
}

const InputRadio: FC<PInputRadio> = ({
  text,
  subtext,
  style,
  idRadio,
  nameRadio,
  ...props
}: PInputRadio) => (
  <Container style={style}>
    <Radio type="radio" id={idRadio} name={nameRadio} {...props} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text htmlFor={idRadio}>
        {text}
      </Text>
      <SubText>
        {subtext}
      </SubText>
    </div>
  </Container>
);

InputRadio.defaultProps = {
  text: '',
  subtext: '',
  nameRadio: '',
  idRadio: '',
  style: {},
};


export default InputRadio;
