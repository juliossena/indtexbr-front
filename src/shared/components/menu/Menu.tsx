import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import MenuIcon from '@material-ui/icons/Menu';

import { RootStateGlobal } from '../../../store/reducer';
import { colors } from '../../functions/colors';
import { MenuUrl } from '../../enums/menuUrl';
import ButtonMenu from '../buttons/buttonMenu/ButtonMenu';
import {
    Container,
    Img,
    ContainerIcon,
} from './styles';
import ButtonIcon from '../buttons/buttonIcon/ButtonIcon';

const Menu = () => {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const { userData } = useSelector((state: RootStateGlobal) => state.userReducer);

  return (
    <>
      <ContainerIcon>
        <ButtonIcon onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
        </ButtonIcon>
      </ContainerIcon>
      <Container showMenu={showMenu}>
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
          onClick={() => history.push(MenuUrl.product)}
          icon={(
            <AllInboxIcon
              htmlColor={window.location.pathname === MenuUrl.product
              ? colors.yellowRegular
              : colors.white}
            />
        )}
          isSelected={window.location.pathname === MenuUrl.product}
        >
          PRODUTOS
        </ButtonMenu>
      </Container>
    </>
  );
};

export default Menu;
