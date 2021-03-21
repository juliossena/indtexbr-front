import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconSearch {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconSearch = ({
 width, height, color, style,
} : PIconSearch) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconSearch"
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.71 14h.79l4.99 5L19 20.49l-5-4.99v-.79l-.27-.28A6.471 6.471 0 019.5 16 6.5 6.5 0 1116 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27zM5 9.5C5 11.99 7.01 14 9.5 14S14 11.99 14 9.5 11.99 5 9.5 5 5 7.01 5 9.5z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconSearch)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconSearch.defaultProps = {
    width: 24,
    height: 24,
    color: colors.primary,
    style: {},
};

export default IconSearch;
