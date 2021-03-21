import styled from 'styled-components';
import { fonts } from '../../functions/fonts';
import { colors } from '../../functions/colors';

export const TitleTourney = styled.h1`
    width: 100%;
    height: 64px;
    border-bottom: 4px solid ${colors.pinkDark};
    padding: 24px;

    font-family: ${fonts.bold};
    color: ${colors.pinkDark};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
`;
