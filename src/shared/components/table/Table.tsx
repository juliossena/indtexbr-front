import React, { ReactNode, useEffect, useState } from 'react';
import { colors } from '../../functions/colors';
import IconChevronBottom from '../../images/icon/iconChevronBottom';
import IconChevronRight from '../../images/icon/iconChevronRight';
import ButtonIcon from '../buttons/buttonIcon/ButtonIcon';
import { verifySortTable } from './verifySortTable';

import {
    Table as StyleTable,
    THead,
    RowTable,
    Column,
    TBody,
    BottomPagination,
    HeaderSort,
} from './styleTable';

export enum Order {
  ASC = 0,
  DESC = 1,
}

export interface ColumnReactNode {
    columns: ReactNode[],
}

interface Titles {
  name: string,
  type: string,
  openClick: boolean,
  widthTd?: string,
}

interface PTable {
    titles: Titles[],
    rows: ColumnReactNode[],
    rowsPerPage?: number,
}

const Table = ({
  titles,
  rows,
  rowsPerPage,
}: PTable) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [typeOrder, setTypeOrder] = useState(Order.ASC);
  const [rowsEdit, setRowsEdit] = useState(rows);
  const [columnSort, setColumnSort] = useState(-1);
  const [amountPerPage] = useState(rowsPerPage || 0);

  useEffect(() => {
    setColumnSort(-1);
    setRowsEdit(rows);
  }, [rows]);

  const isFirstPage = () => currentPage <= 1;

  const isLastPage = () => (currentPage * amountPerPage) >= rows.length;

  const sortPerColumn = (indexColumn: number, openClick: boolean) => {
    if (!openClick) {
      return;
    }
    let order = Order.ASC;
    if (indexColumn === columnSort && typeOrder === Order.ASC) {
      order = Order.DESC;
    }
    setTypeOrder(order);
    setColumnSort(indexColumn);
    const rowsSorted = rows.sort((a, b) => verifySortTable(a
      .columns[indexColumn], b.columns[indexColumn], titles[indexColumn].type, order));
    setRowsEdit([...rowsSorted]);
  };

  return (
    <>
      <StyleTable>
        <THead>
          <RowTable>
            {titles.map((title, index) => (
              <Column
                style={{ width: title.widthTd }}
                onClick={() => sortPerColumn(index, title.openClick)}
              >
                <HeaderSort openClick={title.openClick}>
                  {title.name}
                  {columnSort === index && (
                    <IconChevronBottom
                      style={{
                        transform: typeOrder === Order.ASC ? 'rotate(0)' : 'rotate(180deg)',
                        transition: '0.5s',
                      }}
                    />
                  )}
                </HeaderSort>
              </Column>
          ))}
          </RowTable>
        </THead>
        <TBody>
          {rowsEdit.map((row, index) => {
          if ((currentPage * amountPerPage) < (index + 1)
            || ((currentPage * amountPerPage) - amountPerPage) >= (index + 1)
          ) {
            return null;
          }
          return (
            <RowTable>
              {row.columns.map(column => (
                <Column>{ column }</Column>
              ))}
            </RowTable>
          );
        })}
        </TBody>

      </StyleTable>
      <BottomPagination>
        <ButtonIcon
          disabled={isFirstPage()}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <IconChevronRight style={{ transform: 'rotate(180deg)' }} color={isFirstPage() ? colors.grey100 : colors.primary} />
        </ButtonIcon>
        <ButtonIcon
          disabled={isLastPage()}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <IconChevronRight color={isLastPage() ? colors.grey100 : colors.primary} />
        </ButtonIcon>
      </BottomPagination>
    </>
  );
};

Table.defaultProps = {
  rowsPerPage: 10,
};

export default Table;
