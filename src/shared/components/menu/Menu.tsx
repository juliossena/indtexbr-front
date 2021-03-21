import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import AllInboxIcon from '@material-ui/icons/AllInbox';

import { RootStateGlobal } from '../../../store/reducer';
import { colors } from '../../functions/colors';
import { MenuUrl } from '../../enums/menuUrl';
import ButtonMenu from '../buttons/buttonMenu/ButtonMenu';
import {
    Container,
    Img,
} from './styles';

const Menu = () => {
  const history = useHistory();
  const { userData } = useSelector((state: RootStateGlobal) => state.userReducer);

  return (
    <Container>
      <Img src="/svg/logo.svg" alt="Logo" />
      <ButtonMenu
        onClick={() => history.push(MenuUrl.home)}
        icon={(
          <HomeIcon
            htmlColor={window.location.pathname === MenuUrl.home
            ? colors.yellowRegular
            : colors.white}
          />
)}
        isSelected={window.location.pathname === MenuUrl.home}
      >
        HOME
      </ButtonMenu>
      { userData && userData.idTypeUser === 1 && (
        <ButtonMenu
          onClick={() => history.push(MenuUrl.user)}
          icon={(
            <PeopleIcon
              htmlColor={window.location.pathname === MenuUrl.user
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
          <AllInboxIcon
            htmlColor={window.location.pathname === MenuUrl.user
              ? colors.yellowRegular
              : colors.white}
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
