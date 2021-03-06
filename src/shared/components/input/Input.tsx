import React, { InputHTMLAttributes, FC } from 'react';
import { CSSProperties } from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

import { colors } from '../../functions/colors';
import {
  Container,
  StyledInput,
  TextPlaceHolder,
  TextErrorMessage,
  TextLenght,
} from './styles';

interface PInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  title?: string;
  error?: boolean;
  messageError?: string;
  style?: CSSProperties;
  backgroundColor?: string;
  showBorder?: boolean;
  icon?: string;
  showLenghtMax?: boolean;
}

const Input: FC<PInput> = ({
    error,
    placeholder,
    messageError,
    style,
    title,
    backgroundColor,
    showBorder,
    icon,
    showLenghtMax,
  ...props
}: PInput) => {
  const { value, maxLength, disabled } = props;
  const renderIcon = () => {
    switch (icon) {
      case 'search':
        return <SearchIcon style={{ margin: '8px -16px 8px 12px', zIndex: 2 }} />;
      default:
        return null;
    }
  };

  return (
    <Container style={style} icon={icon !== undefined}>
      {title && (
        <TextPlaceHolder>
          {title}
        </TextPlaceHolder>
      )}
      {icon && renderIcon()}
      <StyledInput
        error={error}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
        showBorder={showBorder}
        icon={icon !== undefined}
        disabled={disabled}
        {...props}
      />
      {showLenghtMax && maxLength && (
        <TextLenght>
          {`${value ? value.toLocaleString().length : '0'}/${maxLength} caracteres`}
        </TextLenght>
      )}
      <TextErrorMessage>
        {messageError}
      </TextErrorMessage>
    </Container>
  );
};

Input.defaultProps = {
  error: false,
  placeholder: '',
  messageError: '',
  style: {},
  title: undefined,
  backgroundColor: colors.white,
  showBorder: true,
  icon: undefined,
  showLenghtMax: false,
};

export default Input;
