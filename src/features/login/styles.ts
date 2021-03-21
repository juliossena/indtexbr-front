import styled from 'styled-components';
import color from '../../shared/functions/colors';

export const Item = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 55% 45%;
    grid-template-rows: 100vh;
    grid-gap: 0px 0px;
    grid-template-areas:
    ". .";
    margin: 0px;
    padding: 0px;
`;

export const Content = styled.div`
    background-size: contain;
    background-color: #c7d2dc;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
`;

export const Logo = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 120px;
  width: 100%;
  min-width: 60px;
  max-height: 80px;
  height: 100%;
  min-height: 60px;
  margin-left: 40px;
  margin-top: 50px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 50px;
  padding-top: 180px;
  text-align: center;
  color: ${color.primary};
  font-weight: 500;
`;

export const TitleLogin = styled.h1`
  font-size: 56px;
  margin-top: 40px;
  margin-left: 50px;
  color: ${color.primary};
  font-weight: 500;
`;

export const Form = styled.form`
  margin: 60px auto;
  width: 60%
`;

export const InputContainer = styled.div`
  margin-top: 16px;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
`;
