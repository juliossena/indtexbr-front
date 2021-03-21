import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconCompany {
  width?: number;
  height?: number;
  color?: string;
}

const IconCompany = ({ width, height, color } : PIconCompany) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconCompany"
      maskUnits="userSpaceOnUse"
      x={2}
      y={3}
      width={20}
      height={17}
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" fill="#fff" />
    </mask>
    <g mask="url(#prefix__IconCompany)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconCompany.defaultProps = {
  width: 24,
  height: 24,
  color: colors.white,
};

export default IconCompany;
