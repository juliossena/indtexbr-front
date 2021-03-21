import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import {
    Container,
    Text,
} from './styles';

interface PButtonMenus extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon: ReactNode;
  isSelected?: boolean;
}

const ButtonMenu: FC<PButtonMenus> = ({
 children,
 icon,
 isSelected,
 ...props
}: PButtonMenus) => (
  <Container isSelected={isSelected} {...props}>
    {icon}
    <Text isSelected={isSelected}>
      {children}
    </Text>
  </Container>
);

ButtonMenu.defaultProps = {
  isSelected: false,
};

export default ButtonMenu;
