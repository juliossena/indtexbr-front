import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconChevronBottom {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconChevronBottom = ({
 width,
 height,
 color,
 style,
} : PIconChevronBottom) => (
  <svg
    width={width}
    height={height}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconChevronBottom"
      maskUnits="userSpaceOnUse"
      x={6}
      y={8}
      width={12}
      height={8}
    >
      <path
        d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconChevronBottom)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconChevronBottom.defaultProps = {
    width: 24,
    height: 24,
    color: colors.grey100,
    style: {},
};

export default IconChevronBottom;
