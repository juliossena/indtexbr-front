import React, { ReactNode, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../../shared/components/menu/Menu';
import BlockScreen from '../../shared/components/loadings/blockScreen/BlockScreen';
import { isLogged } from '../../shared/functions/connection/auth';
import { operations as operationsUser } from '../../store/reducers/user';
import {
  Container,
  BoxMenuMain,
  Main,
} from './styles';
import Header from '../../shared/components/header/Header';
import { RootStateGlobal } from '../../store/reducer';

interface PLogged {
    children: ReactNode;
}

const Logged = ({ children } :PLogged) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const userData = useSelector((state: RootStateGlobal) => state.userReducer.userData);
    const getUserData = async () => dispatch(operationsUser.getUserData());

    useEffect(() => {
      const verifyLogged = async () => {
        if (isLogged()) {
            if (!userData) {
              setLoading(true);
              await getUserData();
              setLoading(false);
            }
          return;
        }
        history.push('/');
      };
      verifyLogged();
    }, []);

    return (
      <Container>
        <BlockScreen isShow={loading} />
        <BoxMenuMain>
          <Menu />
          <Main>
            <Header userData={userData} />
            {children}
          </Main>
        </BoxMenuMain>
      </Container>
    );
};

export default Logged;
