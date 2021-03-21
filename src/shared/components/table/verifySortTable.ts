/* eslint-disable @typescript-eslint/no-explicit-any */
import { removeSpecialCharacters } from '../../functions/utils';
import { dateTimeStringToDate } from '../../functions/date';

export const verifySortTable = (a: any, b: any, type: string, order: number) => {
    try {
        if (type === 'string') {
            const strA = removeSpecialCharacters(a);
            const strB = removeSpecialCharacters(b);
            if (strA < strB) {
                if (order === 0) {
                    return -1;
                }
                return 1;
            }
            if (strA > strB) {
                if (order === 0) {
                    return 1;
                }
                return -1;
            }
        }
        if (type === 'number') {
            const intA = parseInt(a, 10);
            const intB = parseInt(b, 10);
            if (intA < intB) {
                if (order === 0) {
                    return -1;
                }
                    return 1;
            }
            if (intA > intB) {
                if (order === 0) {
                    return 1;
                }
                return -1;
            }
        }
        if (type === 'date') {
            const dateA = dateTimeStringToDate(a);
            const dateB = dateTimeStringToDate(b);
            if (dateA < dateB) {
                if (order === 0) {
                    return -1;
                }
                    return 1;
            }
            if (dateA > dateB) {
                if (order === 0) {
                    return 1;
                }
                return -1;
            }
        }
    } catch (e) {
        return 0;
    }
    return 0;
};
