import styled from 'styled-components';

import { colors } from '../../../functions/colors';

export const Container = styled.div`
    z-index: 9999;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${colors.black};
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
`;
