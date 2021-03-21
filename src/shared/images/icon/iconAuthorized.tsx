import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconAuthorized {
    width?: number;
    height?: number;
    color?: string;
}

const IconAuthorized = ({ width, height, color } : PIconAuthorized) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconAuthorized"
      maskUnits="userSpaceOnUse"
      x={3}
      y={4}
      width={19}
      height={17}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-2 5l3-2.94a9.34 9.34 0 00-1-.06c-2.67 0-8 1.34-8 4v2h9l-3-3zm3 0l3.47 3.5L22 13.91l-1.4-1.41-5.13 5.17-2.07-2.08L12 17z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconAuthorized)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconAuthorized.defaultProps = {
    width: 24,
    height: 24,
    color: colors.sucess,
};

export default IconAuthorized;
