import styled from 'styled-components';
import { fonts } from '../../../functions/fonts';
import { colors } from '../../../functions/colors';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Text = styled.label`
    margin-left: 8px;
    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: ${colors.black};
`;
