import styled from 'styled-components';

import { colors } from '../../../functions/colors';

interface PSelected {
    isSelected?: boolean;
}

export const Container = styled.button<PSelected>`
    width: 100%;
    height: 56px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.2s;
    disabled: false;

    display: flex;
    align-items: center;
    padding-left: 24px;
    border-left: 4px solid ${props => (props.isSelected ? colors.yellowRegular : 'transparent')};

    :hover {
        border-left: 4px solid ${colors.yellowRegular};
    }
`;

export const Text = styled.p<PSelected>`
    margin-left: 12px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${props => (props.isSelected ? colors.yellowRegular : colors.white)};
`;
