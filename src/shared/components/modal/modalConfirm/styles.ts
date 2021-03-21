import styled from 'styled-components';
import { fonts } from '../../../functions/fonts';
import { colors } from '../../../functions/colors';

export const TitleModal = styled.h1`
    font-family: ${fonts.bold};
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 16px;
    color: ${colors.secondary};
`;

export const Paragraph = styled.p`
    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${colors.black};
`;

export const BoxButtons = styled.div`
    display: flex;
    margin-top: 32px;
    justify-content: flex-end;
`;
