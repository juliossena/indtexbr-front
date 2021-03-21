import styled from 'styled-components';

import { colors } from '../../functions/colors';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center
`;

export const Shadow = styled.div`
    background-color: ${colors.black};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    z-index: 1;
`;

export const Box = styled.div`
    max-width: 800px;
    width: 95%;
    padding: 32px;
    background-color: ${colors.white};
    margin: 16px auto;
    border-radius: 4px;
`;

export const BoxChildren = styled(Box)`
    max-width: 600px;
    padding: 32px;
    z-index: 2;
`;
