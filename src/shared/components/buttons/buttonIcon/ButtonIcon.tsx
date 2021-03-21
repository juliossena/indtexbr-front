import React, { ButtonHTMLAttributes, ReactNode, FC } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  Container,
} from './styles';

interface PButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  height?: number;
}

const ButtonIcon: FC<PButtonIcon> = ({
  children,
  loading,
  height,
  ...props
}: PButtonIcon) => (
  <Container type="button" height={height} {...props}>
    {loading ? (
      <CircularProgress size={24} color="inherit" />
    ) : children}
  </Container>
);

ButtonIcon.defaultProps = {
  loading: false,
  height: 24,
};

export default ButtonIcon;
