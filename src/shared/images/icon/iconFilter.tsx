import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconFilter {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconFilter = ({
 width, height, color, style,
} : PIconFilter) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
  >
    <mask
      id="prefix_IconFilter"
      maskUnits="userSpaceOnUse"
      x={3}
      y={6}
      width={18}
      height={12}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6v2h18V6H3zm7 12h4v-2h-4v2zm8-5H6v-2h12v2z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix_IconFilter)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconFilter.defaultProps = {
    width: 24,
    height: 24,
    color: colors.primary,
    style: {},
};

export default IconFilter;
