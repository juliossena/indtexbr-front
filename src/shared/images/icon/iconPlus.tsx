import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconPlus {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
  }

const IconPlus = ({
 width, height, color, style,
} : PIconPlus) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconPlus"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 5v4H7v2h4v4h2v-4h4v-2h-4V7h-2zm-7 5c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconPlus)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconPlus.defaultProps = {
    width: 24,
    height: 24,
    color: colors.white,
    style: {},
};

export default IconPlus;
