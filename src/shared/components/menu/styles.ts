import styled from 'styled-components';

import { colors } from '../../functions/colors';

interface PContainer {
  showMenu: boolean;
}

export const Container = styled.menu<PContainer>`
    width: 192px;
    height: 100vh;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: column;
    z-index: 5;

    @media (max-width: 600px) {
      display: ${props => (props.showMenu ? 'flex' : 'none')};
      position: absolute;
    }
`;

export const ContainerIcon = styled.div`
  display: none;
  position: absolute;
  padding: 8px;
  z-index: 6;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const Img = styled.img`
  height: 48px;
  margin: 40px auto;
`;
