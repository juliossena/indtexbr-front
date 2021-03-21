import styled from 'styled-components';
import { fonts } from '../../functions/fonts';
import { colors } from '../../functions/colors';


interface PContainer {
    error?: boolean;
}

export const Container = styled.div`
`;

export const Select = styled.select<PContainer>`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border:  ${props => (props.error ? `1px solid ${colors.error}` : `1px solid ${colors.grey80}`)};
    padding: 8px;
    color: ${props => (props.error ? colors.error : colors.black)};

    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
`;

export const Title = styled.h2`
    color: ${colors.primary};
    font-family: ${fonts.semiBold};
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;

    margin-bottom: 8px;
    margin-left: 8px;
`;
