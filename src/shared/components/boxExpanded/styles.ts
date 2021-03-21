import styled from 'styled-components';
import { colors } from '../../functions/colors';

export const Container = styled.div`
    width: 100%;
    
`;

export const BoxTitle = styled.div`
    cursor: pointer;
    display: flex;
    width: 100%;
    background-color: ${colors.primary};
    height: 52px;
    color: ${colors.white};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const BoxInfo = styled.div`
    margin: 32px 0px;
`;
