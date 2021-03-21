import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconLogout {
    width?: number;
    height?: number;
    color?: string;
}

const IconLogout = ({ width, height, color } : PIconLogout) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
      fill={color}
    />
  </svg>
);

IconLogout.defaultProps = {
    width: 24,
    height: 24,
    color: colors.white,
};

export default IconLogout;
