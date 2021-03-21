import styled from 'styled-components';
import { colors } from '../../shared/functions/colors';
import { fonts } from '../../shared/functions/fonts';

export const Container = styled.div`
    width: 100%;
    padding: 40px;
`;

export const Title = styled.p`
    font-family: ${fonts.semiBold};
    font-size: 24px;
    color: ${colors.primary};
    margin-bottom: 24px;
`;

export const Message = styled.p`
    font-family: ${fonts.regular};
    font-size: 16px;
    color: ${colors.primary};
`;
