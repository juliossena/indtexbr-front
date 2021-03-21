import React, { InputHTMLAttributes, FC } from 'react';

import {
  Container,
} from './styles';

const InputTransparent: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => (
  <Container {...props} />
);


export default InputTransparent;
