import React, { ButtonHTMLAttributes, FC } from 'react';
import { CSSProperties } from 'styled-components';

import {
  Container,
  Select as StyledSelect,
  Title,
} from './styles';

export interface POptions {
    value: string;
    viewValue: string;
    selected?: boolean;
}

interface PSelect extends ButtonHTMLAttributes<HTMLSelectElement> {
    nameSelect: string;
    listOptions: POptions[];
    valueSelected?: string;
    title: string;
    style?: CSSProperties;
}

const Select: FC<PSelect> = ({
  nameSelect,
  listOptions,
  valueSelected,
  title,
  style,
  ...props
}: PSelect) => (
  <Container style={style}>
    <Title>
      {title}
    </Title>
    <StyledSelect name={nameSelect} {...props}>
      {listOptions.map((option: POptions) => (
        <option value={option.value} selected={valueSelected === option.value || option.selected}>
          {option.viewValue}
        </option>
      ))}
    </StyledSelect>
  </Container>
);

Select.defaultProps = {
  valueSelected: '',
  style: {},
};

export default Select;
