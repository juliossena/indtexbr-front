import styled from 'styled-components';
import { colors } from '../../../functions/colors';
import { fonts } from '../../../functions/fonts';

export const Container = styled.div`

 
`;

export const Title = styled.h2`
    font-family: ${fonts.semiBold};
    color: ${colors.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    margin-bottom: 8px;
    margin-left: 4px;
`;

export const BoxInput = styled.div`
    border: 1px solid ${colors.grey80};
    border-radius: 4px;
    padding: 4px 8px;
    height: 40px;

`;
