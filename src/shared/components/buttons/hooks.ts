import { css } from 'styled-components';
import { fonts } from '../../functions/fonts';


import { colors } from '../../functions/colors';

interface PUseTypeContainer {
  typeButton?: string;
  disabled?: boolean;
}

export const useTypeContainer = (({ typeButton = 'primary', disabled = false }: PUseTypeContainer) => {
  switch (typeButton) {
    case 'primary-blue':
      return css`
        width: 100%;
        height: 60px;
        cursor: ${disabled ? 'default' : 'pointer'};
        background-color: ${disabled ? colors.disabled : colors.blue};
        color: ${colors.white};
        font-size: 18px;
        border: none;
        border-radius: 40px;
        font-weight: 400;
      `;
    case 'primary-white':
      return css`
        width: 100%;
        height: 40px;
        cursor: ${disabled ? 'default' : 'pointer'};
        background-color: ${disabled ? colors.disabled : colors.white};
        border: 1px solid ${colors.purpleRegular};
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${colors.primary};
        font-family: ${fonts.semiBold};
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
      `;
    case 'primary':
    default:
      return css`
        width: 100%;
        height: 40px;
        cursor: ${disabled ? 'default' : 'pointer'};
        background-color: ${disabled ? colors.disabled : colors.primary};
        color: ${colors.white};
        border: none;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        font-family: ${fonts.semiBold};
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
      `;
  }
});
