import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconMember {
    width?: number;
    height?: number;
    color?: string;
}

const IconMember = ({ width, height, color } : PIconMember) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="prefix__IconMember"
      maskUnits="userSpaceOnUse"
      x={4}
      y={4}
      width={16}
      height={16}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconMember)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconMember.defaultProps = {
    width: 24,
    height: 24,
    color: colors.primary,
};

export default IconMember;
