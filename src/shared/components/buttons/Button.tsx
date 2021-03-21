import React, { ButtonHTMLAttributes, ReactNode, FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FilterListIcon from '@material-ui/icons/FilterList';

import { colors } from '../../functions/colors';
import {
  Container,
  BoxIcon,
} from './styles';

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
          <ChevronRightIcon />
        );
      case 'plus':
        return (
          <AddIcon htmlColor={colorIcon} style={{ margin: `${icon ? '0px 0px 0px 8px' : '0px 8px 0px 0px'}` }} />
        );
      case 'plusInnerBorder':
        return (
          <AddCircleOutlineIcon htmlColor={colorIcon} style={{ margin: `${icon ? '0px 0px 0px 8px' : '0px 8px 0px 0px'}` }} />
        );
      case 'filter':
        return (
          <FilterListIcon htmlColor={colorIcon} style={{ margin: `${icon ? '0px 0px 0px 8px' : '0px 8px 0px 0px'}` }} />
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
