import styled from 'styled-components';

interface PContainer {
    disabled?: boolean;
    height?: number;
}

export const Container = styled.button<PContainer>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    height: ${(props => props.height)}px;

    
`;
