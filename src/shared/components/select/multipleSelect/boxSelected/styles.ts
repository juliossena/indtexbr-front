import styled from 'styled-components';
import { colors } from '../../../../functions/colors';
import { fonts } from '../../../../functions/fonts';

export const Container = styled.div`
    display: flex;
    width: fit-content;
    height: 24px;
    border-radius: 12px;
    align-items: center;
    padding: 8px;
    background-color: ${colors.grey40};

    margin: 4px;
    color: ${colors.black};
    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
`;
