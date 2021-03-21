import React, { ButtonHTMLAttributes, ReactNode, FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import ArrowRight from '../../images/icon/arrows/arrowRight';
import {
  Container,
  BoxIcon,
} from './styles';
import IconPlus from '../../images/icon/iconPlus';
import { colors } from '../../functions/colors';
import IconPlusInnerBorder from '../../images/icon/iconPlusInnerBorder';
import IconFilter from '../../images/icon/iconFilter';

interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  iconLeft?: string;
  loading?: boolean;
  type?: string;
  colorIcon?: string;
  typeButton?: string;
  children: ReactNode;
}

const Button: FC<OwnProps> = ({
  children,
  icon,
  iconLeft,
  loading,
  type,
  colorIcon,
  typeButton,
  ...props
}: OwnProps) => {
  const renderIcon = (typeIcon?: string, showLoading = true) => {
    if (loading && showLoading) {
      return (
        <BoxIcon>
          <CircularProgress size={24} color="inherit" />
        </BoxIcon>
      );
    }
    switch (typeIcon) {
      case 'arrowRight':
        return (
          <ArrowRight />
        );
      case 'plus':
        return (
          <IconPlus color={colorIcon} style={{ margin: `${icon ? '0px 0px 0px 8px' : '0px 8px 0px 0px'}` }} />
        );
      case 'plusInnerBorder':
        return (
          <IconPlusInnerBorder color={colorIcon} style={{ margin: `${icon ? '0px 0px 0px 8px' : '0px 8px 0px 0px'}` }} />
        );
      case 'filter':
        return (
          <IconFilter color={colorIcon} style={{ margin: `${icon ? '0px 0px 0px 8px' : '0px 8px 0px 0px'}` }} />
        );
      default:
        return null;
    }
  };

  return (
    <Container type={typeButton} typeButton={type} disabled={loading} {...props}>
      {renderIcon(iconLeft, false)}
      {children}
      {renderIcon(icon)}
    </Container>
  );
};

Button.defaultProps = {
  icon: '',
  iconLeft: '',
  loading: false,
  type: 'primary',
  typeButton: 'button',
  colorIcon: colors.white,
};

export default Button;
