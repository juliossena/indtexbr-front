import styled from 'styled-components';
import { fonts } from '../../../functions/fonts';
import { colors } from '../../../functions/colors';

export const Container = styled.div`
    display: flex;
    align-items: center;

    input[type='radio']:checked:after {
        background-color: ${colors.pinkDark};
    }
`;

export const Text = styled.label`
    margin-top: 22px;
    margin-left: 8px;
    margin-bottom: 8px;
    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: ${colors.black};
`;

export const SubText = styled.label`
    margin-left: 8px;
    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    color: ${colors.grey100};
`;

export const Radio = styled.input`
`;
