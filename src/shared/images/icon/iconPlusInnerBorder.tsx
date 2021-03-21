import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconPlusInnerBorder {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconPlusInnerBorder = ({
 width,
 height,
 color,
 style,
} : PIconPlusInnerBorder) => (
  <svg
    width={width}
    height={height}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="prefix__IconPlusInnerBorder"
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3h2v2H7V3zM3 7h2v2H3V7zm0 14h2v-2H3v2zm4 0h2v-2H7v2zm-4-4h2v-2H3v2zM5 3H3v2h2V3zm10 0h2v2h-2V3zm4 6h2V7h-2v2zm0-4V3h2v2h-2zm-4 16h2v-2h-2v2zM11 3h2v8h8v2h-8v8h-2v-8H3v-2h8V3zm8 18h2v-2h-2v2zm2-4h-2v-2h2v2z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconPlusInnerBorder)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconPlusInnerBorder.defaultProps = {
    width: 24,
    height: 24,
    color: colors.purpleRegular,
    style: {},
};

export default IconPlusInnerBorder;
