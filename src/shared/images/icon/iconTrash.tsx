import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconTrash {
    width?: number;
    height?: number;
    color?: string;
}

const IconTrash = ({ width, height, color } : PIconTrash) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconTrash"
      maskUnits="userSpaceOnUse"
      x={5}
      y={3}
      width={14}
      height={18}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 4H19v2H5V4h3.5l1-1h5l1 1zM8 21c-1.1 0-2-.9-2-2V7h12v12c0 1.1-.9 2-2 2H8z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconTrash)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconTrash.defaultProps = {
  width: 24,
  height: 24,
  color: colors.grey100,
};

export default IconTrash;
