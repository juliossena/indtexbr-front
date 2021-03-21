import styled from 'styled-components';

import { colors } from '../../functions/colors';

export const Container = styled.menu`
    width: 192px;
    height: 100vh;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;
`;

export const Img = styled.img`
  height: 48px;
  margin: 40px auto;
`;
