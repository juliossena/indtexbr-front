import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconChevronRight {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconChevronRight = ({
 width,
 height,
 color,
 style,
} : PIconChevronRight) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconChevronRight"
      maskUnits="userSpaceOnUse"
      x={8}
      y={6}
      width={8}
      height={12}
    >
      <path
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconChevronRight)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconChevronRight.defaultProps = {
    width: 24,
    height: 24,
    color: colors.secondary,
    style: {},
};

export default IconChevronRight;
