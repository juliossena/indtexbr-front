import styled from 'styled-components';
import { colors } from '../../../shared/functions/colors';
import Input from '../../../shared/components/input/Input';

export const Container = styled.div`
    width: 100%;
    padding: 16px 40px;
`;

export const ContainerInsertProduct = styled.div`
    margin-top: 32px;
    display: flex;
`;

export const BoxInsertProduct = styled.div`
    width: 100%;
    padding: 24px;
    background-color: ${colors.white};
`;

export const InputProduct = styled(Input)`
    display: block;
    text-align: left;
    margin-bottom: 16px;
`;


export const BoxBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
`;
