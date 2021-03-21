import styled from 'styled-components';
import { fonts } from '../../functions/fonts';

import { colors } from '../../functions/colors';

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background-color: transparent;

    display: flex;
    justify-content: space-between;
    padding: 0px 40px;
    align-items: center;
`;

export const TextHeader = styled.p`
  color: ${colors.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-family: ${fonts.bold};
`;

export const BoxUser = styled.div`
  display: flex;
`;

export const BoxNameUser = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 32px 0px 16px
`;

export const NameUser = styled.p`
  font-family: ${fonts.semiBold};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.primary};
`;

export const AreaUser = styled.p`
  font-family: ${fonts.regular};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  color: ${colors.grey100};
`;
