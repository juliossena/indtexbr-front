import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

import { colors } from '../../functions/colors';
import { doLogout } from '../../functions/connection/auth';
import { User } from '../../modals/user/user';
import ButtonIcon from '../buttons/buttonIcon/ButtonIcon';

import {
    Container,
    TextHeader,
    BoxUser,
    BoxNameUser,
    NameUser,
} from './styles';

interface PHeader {
  userData?: User;
}

const Header = ({ userData }: PHeader) => {
  if (!userData) return null;

  return (
    <Container>
      <TextHeader>
        {`Olá, ${userData.name}!`}
      </TextHeader>
      <BoxUser>
        <PersonIcon />
        <BoxNameUser>
          <NameUser>
            {userData.name}
          </NameUser>
        </BoxNameUser>
        <ButtonIcon onClick={doLogout}>
          <ExitToAppIcon htmlColor={colors.primary} />
        </ButtonIcon>
      </BoxUser>
    </Container>
  );
};

Header.defaultProps = {
  userData: undefined,
};

export default Header;
