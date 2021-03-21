import styled from 'styled-components';
import { colors } from '../../../functions/colors';

export const Container = styled.div`
    width: 100%;
    
`;

export const FlexContainer = styled.div`
    display: flex;
`;

export const BoxItensSelected = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid ${colors.grey80};
    margin-left: 16px;
    margin-top: 22px;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    height: 200px;
`;
