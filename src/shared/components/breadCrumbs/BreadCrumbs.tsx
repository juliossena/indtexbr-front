import React from 'react';
import IconChevronRight from '../../images/icon/iconChevronRight';
import {
    Container,
    Title,
} from './styles';

interface ListMenus {
    name: string;
    action?: () => void;
}

interface PBreadCrumbs {
    listMenus:ListMenus[];
}

const BreadCrumbs = ({ listMenus }: PBreadCrumbs) => {
    const renderFirstMenu = () => (
      <Title
        isAction={listMenus[0].action !== undefined}
        onClick={listMenus[0].action}
      >
        {listMenus[0].name}
      </Title>
    );

    return (
      <Container>
        {renderFirstMenu()}
        {listMenus.map((menu, index) => {
            if (index === 0) return null;
            return (
              <>
                <IconChevronRight style={{ margin: '0px 16px' }} />
                <Title
                  isAction={menu.action !== undefined}
                  onClick={menu.action}
                >
                  {menu.name}
                </Title>
              </>
            );
        })}
      </Container>
    );
};

export default BreadCrumbs;
