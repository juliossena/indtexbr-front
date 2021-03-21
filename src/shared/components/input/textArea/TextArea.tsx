import React, { InputHTMLAttributes, FC } from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../../functions/colors';
import IconSearch from '../../../images/icon/iconSearch';

import {
  Container,
  StyledInput,
  TextPlaceHolder,
  TextErrorMessage,
  TextLenght,
} from './styles';

interface PInput extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  value: string;
  title?: string;
  error?: boolean;
  messageError?: string;
  style?: CSSProperties;
  styleTextarea?: CSSProperties;
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
    styleTextarea,
    title,
    backgroundColor,
    showBorder,
    icon,
    showLenghtMax,
    value,
  ...props
}: PInput) => {
  const { maxLength, disabled } = props;
  const renderIcon = () => {
    switch (icon) {
      case 'search':
        return <IconSearch style={{ margin: '8px -16px 8px 12px', zIndex: 2 }} />;
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
        style={styleTextarea}
        value={value}
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
  styleTextarea: {},
  title: undefined,
  backgroundColor: colors.white,
  showBorder: true,
  icon: undefined,
  showLenghtMax: false,
};

export default Input;
