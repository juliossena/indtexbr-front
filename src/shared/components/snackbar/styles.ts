import styled from 'styled-components';
import { colors } from '../../functions/colors';

interface PContainer {
    position: number;
}

interface PBoxMessage {
    type: string;
}

export const Container = styled.div<PContainer>`
    position: absolute;
    transition: 0.5s;
    bottom: 80px;
    left: ${props => props.position}px;
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const BoxMessage = styled.div<PBoxMessage>`
    height: 64px;
    background-color: ${props => (props.type === 'success' ? colors.greenLight : colors.redLight)};
    border: 2px solid ${props => (props.type === 'success' ? colors.green : colors.red)};
    color: ${props => (props.type === 'success' ? colors.green : colors.red)};
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0px 16px;
`;
