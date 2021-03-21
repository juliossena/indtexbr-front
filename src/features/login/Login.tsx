import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Button from '../../shared/components/buttons/Button';
import { isLogged } from '../../shared/functions/connection/auth';
import { BodyUserLogin } from '../../shared/modals/user/bodies';
import { operations as operationsUser } from '../../store/reducers/user';
import SnackBar, { PSnackbar } from '../../shared/components/snackbar/Snackbar';

import Input from '../../shared/components/input/Input';

import {
  Item,
  Grid,
  Content,
  Form,
  InputContainer,
  Title,
  Logo,
  LoginContainer,
  ButtonContainer,
  TitleLogin,
} from './styles';

interface Props {
  readonly isOpen: boolean;
}

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const reqLogin = async (x: BodyUserLogin) => dispatch(operationsUser.reqLogin(x));
  const getUserData = async () => dispatch(operationsUser.getUserData());

  const [loading, setLoading] = useState<boolean>(false);
  const [snackBar, setSnackbar] = useState<PSnackbar>({ type: '', message: '', show: false });
  const [error, setError] = useState<boolean>(false);
  const [login, setLogin] = useState<BodyUserLogin>({
    email: '',
    password: '',
  });

  useEffect(() => {
    const verifyLogged = async () => {
      if (isLogged()) {
        setLoading(true);
        try {
          await getUserData();
          history.push('/home');
          setLoading(false);
        } catch (e) {
          setLoading(false);
        }
      }
    };
    verifyLogged();
  }, []);

  const handleLogin = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      await reqLogin(login);
      history.push('/home');
    } catch (e) {
      setError(true);
      setSnackbar({
        type: 'error',
        message: e.message,
        show: true,
      });
    }
    setLoading(false);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setLogin({
      ...login,
      email: event.target.value,
    });
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setLogin({
      ...login,
      password: event.target.value,
    });
  };

  return (
    <Grid>
      <SnackBar
        type={snackBar.type}
        message={snackBar.message}
        show={snackBar.show}
        setSnackBar={setSnackbar}
      />
      <Item>
        <Content>
          <Logo
            style={{ backgroundImage: '/svg/logo.svg' }}
          />
          <TitleLogin>
            Seja bem-vindo
            {' '}
            <br />
            ao IndTexBR
          </TitleLogin>
        </Content>
      </Item>
      <Item>
        <LoginContainer>
          <Title>Acesse o IndTexBR</Title>
          <Form onSubmit={handleLogin}>
            <InputContainer>
              <Input
                error={error}
                title="Digite o seu email"
                placeholder="Digite o seu email"
                type="email"
                value={login.email}
                onChange={handleChangeEmail}
              />
            </InputContainer>
            <InputContainer>
              <Input
                error={error}
                title="Digite a sua senha"
                placeholder="Digite a sua senha"
                type="password"
                value={login.password}
                onChange={handleChangePassword}
              />
            </InputContainer>
            <ButtonContainer>
              <Button typeButton="submit" icon="arrowRight" loading={loading}>
                Acesse agora
              </Button>
            </ButtonContainer>
          </Form>
        </LoginContainer>
      </Item>
    </Grid>
  );
};

export default Login;
