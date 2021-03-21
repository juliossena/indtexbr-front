import React from 'react';
import { colors } from '../../functions/colors';
import { doLogout } from '../../functions/connection/auth';
import IconLogout from '../../images/icon/iconLogout';
import IconMember from '../../images/icon/iconMember';
import { User } from '../../modals/user/user';
import ButtonIcon from '../buttons/buttonIcon/ButtonIcon';

import {
    Container,
    TextHeader,
    BoxUser,
    BoxNameUser,
    NameUser,
    AreaUser,
} from './styles';

interface PHeader {
  userData?: User;
}

const Header = ({ userData }: PHeader) => {
  if (!userData) return null;

  return (
    <Container>
      <TextHeader>
        {`Olá, ${userData.company ? userData.company.name : userData.name}!`}
      </TextHeader>
      <BoxUser>
        <IconMember />
        <BoxNameUser>
          <NameUser>
            {userData.name}
          </NameUser>
          {userData.typeUser && (
            <AreaUser>
              {userData.typeUser.name.toUpperCase()}
            </AreaUser>
          )}
        </BoxNameUser>
        <ButtonIcon onClick={doLogout}>
          <IconLogout color={colors.primary} />
        </ButtonIcon>
      </BoxUser>
    </Container>
  );
};

Header.defaultProps = {
  userData: undefined,
};

export default Header;
