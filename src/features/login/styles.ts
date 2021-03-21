import styled from 'styled-components';
import { colors } from '../../shared/functions/colors';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  background-color: ${colors.white};
  padding: 32px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: ${colors.primary};
  font-weight: 500;
`;

export const Form = styled.form`
`;

export const InputContainer = styled.div`
  margin-top: 16px;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
`;
