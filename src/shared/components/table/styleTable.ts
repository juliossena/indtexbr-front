import styled from 'styled-components';
import { fonts } from '../../functions/fonts';

import { colors } from '../../functions/colors';

interface PHeaderSort {
    openClick: boolean;
}

export const Table = styled.table`
    width: 100%;
    background-color: ${colors.white};
    border-spacing:0;
`;

export const THead = styled.thead`
    font-family: ${fonts.semiBold} ;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${colors.primary};
`;

export const TBody = styled.thead`
    font-family: ${fonts.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${colors.black};
`;

export const RowTable = styled.tr`
    border-bottom: 1px solid ${colors.grey80};

    :last-of-type {
        border-bottom: 0;
    }
`;

export const HeaderSort = styled.div<PHeaderSort>`
    display: flex;
    align-items: center;
    cursor: ${props => (props.openClick ? 'pointer' : 'inherit')};
`;

export const Column = styled.td`
    padding: 16px 24px;
    border-bottom: 1px solid ${colors.grey80};
`;

export const BottomPagination = styled.div`
    padding: 16px;
    background-color: ${colors.white};
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
