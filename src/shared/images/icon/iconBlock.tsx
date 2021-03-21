import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconBlock {
    width?: number;
    height?: number;
    color?: string;
}

const IconBlock = ({ width, height, color } : PIconBlock) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconBlock"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 014 12zm3.1 6.31A7.902 7.902 0 0012 20c4.42 0 8-3.58 8-8 0-1.85-.63-3.55-1.69-4.9L7.1 18.31z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconBlock)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconBlock.defaultProps = {
    width: 24,
    height: 24,
    color: colors.error,
};

export default IconBlock;
