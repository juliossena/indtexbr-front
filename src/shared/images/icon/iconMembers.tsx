import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconMembers {
    width?: number;
    height?: number;
    color?: string;
}

const IconMembers = ({ width, height, color } : PIconMembers) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__a"
      maskUnits="userSpaceOnUse"
      x={1}
      y={5}
      width={22}
      height={14}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.99 8c0 1.66-1.33 3-2.99 3-1.66 0-3-1.34-3-3s1.34-3 3-3 2.99 1.34 2.99 3zm8 0c0 1.66-1.33 3-2.99 3-1.66 0-3-1.34-3-3s1.34-3 3-3 2.99 1.34 2.99 3zM8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm7.03.05c.35-.03.68-.05.97-.05 2.33 0 7 1.17 7 3.5V19h-6v-2.5c0-1.48-.81-2.61-1.97-3.45z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconMembers.defaultProps = {
    width: 24,
    height: 24,
    color: colors.white,
};

export default IconMembers;
