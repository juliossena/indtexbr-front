import styled from 'styled-components';
import { colors } from '../../functions/colors';
import { fonts } from '../../functions/fonts';

interface PTitle {
    isAction: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1<PTitle>`
    font-family: ${fonts.bold};
    color: ${colors.secondary};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;

    ${props => (props.isAction ? `
        cursor: pointer;

        :hover {
            text-decoration: underline;
        }
    ` : '')}
`;
