import React, { FC } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import {
    Container,
    Title,
    BoxInput,
} from './styles';

import { fonts } from '../../../functions/fonts';


const InputDate: FC<TextFieldProps> = ({
  title,
  style,
  onChange,
  ...props
}: TextFieldProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = props;
    if (onChange) {
      if (type !== 'time') {
        const { value } = event.target;
        const valueSplit = value.split('-');
        if (valueSplit[0] && valueSplit[0].length > 4) {
          return;
        }
      }
      onChange(event);
    }
  };

  return (
    <Container style={style}>
      <Title>
        {title}
      </Title>
      <BoxInput>
        <TextField
          InputProps={{ disableUnderline: true, style: { fontFamily: fonts.regular } }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleOnChange}
          {...props}
        />
      </BoxInput>
    </Container>
  );
};

export default InputDate;
