import styled from 'styled-components';
import { fonts } from '../../shared/functions/fonts';
import { colors } from '../../shared/functions/colors';

export const Container = styled.div`
    width: 100%;
    padding: 16px 40px;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: 24px 0px;
    justify-content: space-between;
`;

export const BoxHeaderButtons = styled.div`
    display: flex;
`;

export const TextHeader = styled.p`
    color: ${colors.black};
    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
`;

export const BoxAreas = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const BoxNameArea = styled.div`
    border-radius: 12px;
    padding: 2px 8px;
    background-color: ${colors.grey40};

    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;

    margin: 0px 8px 8px 0px;

    color: ${colors.black};
`;

export const BoxBlock = styled.div`
    width: 80px;
    text-align: center;
`;
