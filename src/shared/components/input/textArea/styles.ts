import styled from 'styled-components';
import { fonts } from '../../../functions/fonts';
/* eslint-disable no-nested-ternary */
import { colors } from '../../../functions/colors';


interface PContainer {
  error?: boolean;
  backgroundColor?: string;
  showBorder?: boolean;
  icon?: boolean;
  disabled?: boolean;
}

export const Container = styled.div<PContainer>`
  ${props => (props.icon ? 'display: flex;' : '')};
  position: relative;
`;

export const TextPlaceHolder = styled.p`
  font-family: ${fonts.semiBold};
  color: ${colors.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  margin-bottom: 8px;
  margin-left: 4px;
`;

export const TextErrorMessage = styled.p`
  font-family: ${fonts.semiBold};
  color: ${colors.error};
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 15px;
  margin-bottom: 8px;
  margin-left: 4px;
`;

export const StyledInput = styled.textarea<PContainer>`
  ${props => (props.showBorder ? (
    props.error ? `border: 1px solid ${colors.error}` : `border: 1px solid ${colors.grey80}`
  ) : 'border: none;')};
  background-color: ${props => (props.disabled ? colors.grey40 : props.backgroundColor ? props.backgroundColor : 'transparent')};
  border-radius: 4px;
  padding: ${props => (props.icon ? '0px 8px 0px 56px' : '8px 8px')};
  width: 100%;
  outline: none;
  color: ${props => (props.error ? colors.error : colors.black)};
  height: 40px;
  margin: ${props => (props.icon ? '0px 0px 0px -22px' : '0px')};
  


  font-family: ${fonts.regular};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;

export const TextLenght = styled.p`
  position: absolute;
  right: 12px;
  bottom: 20px;
  font-family: ${fonts.regular};
  color: ${colors.grey100};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
`;
