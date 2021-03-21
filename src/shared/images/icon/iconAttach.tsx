import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconAttach {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconAttach = ({
 width,
 height,
 color,
 style,
} : PIconAttach) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__PIconAttach"
      maskUnits="userSpaceOnUse"
      x={7}
      y={1}
      width={11}
      height={22}
    >
      <path
        d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__PIconAttach)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconAttach.defaultProps = {
    width: 24,
    height: 24,
    color: colors.grey80,
    style: {},
};

export default IconAttach;
