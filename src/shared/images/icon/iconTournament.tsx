import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconTournament {
  width?: number;
  height?: number;
  color?: string;
}

const IconTournament = ({ width, height, color } : PIconTournament) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconTournament"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4 6L14 4H5V21H7V14H12.6L13 16H20V6H14.4Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconTournament)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconTournament.defaultProps = {
  width: 24,
  height: 24,
  color: colors.white,
};

export default IconTournament;
