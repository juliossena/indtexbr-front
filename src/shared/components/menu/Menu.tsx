import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { MenuUrl } from '../../enums/menuUrl';
import IconHome from '../../images/icon/iconHome';
import ButtonMenu from '../buttons/buttonMenu/ButtonMenu';
import {
    Container,
    Img,
} from './styles';
import IconMembers from '../../images/icon/iconMembers';
import { colors } from '../../functions/colors';
import { RootStateGlobal } from '../../../store/reducer';

const Menu = () => {
  const history = useHistory();
  const { userData } = useSelector((state: RootStateGlobal) => state.userReducer);

  return (
    <Container>
      <Img src="/svg/logo.svg" alt="Logo" />
      <ButtonMenu
        onClick={() => history.push(MenuUrl.home)}
        icon={<IconHome />}
        isSelected={window.location.pathname === MenuUrl.home}
      >
        HOME
      </ButtonMenu>
      { userData && userData.idTypeUser === 1 && (
        <ButtonMenu
          onClick={() => history.push(MenuUrl.user)}
          icon={(
            <IconMembers
              color={window.location.pathname === MenuUrl.user
                ? colors.yellowRegular
                : colors.white}
            />
        )}
          isSelected={window.location.pathname === MenuUrl.user}
        >
          USUÁRIOS
        </ButtonMenu>
      )}

      <ButtonMenu
        onClick={() => history.push(MenuUrl.user)}
        icon={(
          <IconMembers
            color={window.location.pathname === MenuUrl.user ? colors.yellowRegular : colors.white}
          />
        )}
        isSelected={window.location.pathname === MenuUrl.user}
      >
        PRODUTOS
      </ButtonMenu>
    </Container>
  );
};

export default Menu;
