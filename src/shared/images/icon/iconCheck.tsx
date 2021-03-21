import React, { CSSProperties } from 'react';
import { colors } from '../../functions/colors';

interface PIconCheck {
  width?: number;
  height?: number;
  color?: string;
  style?: CSSProperties;
}

const IconCheck = ({
  width,
  height,
  color,
  style,
}: PIconCheck) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <mask
      id="prefix__IconCheck"
      maskUnits="userSpaceOnUse"
      x={3}
      y={5}
      width={19}
      height={14}
    >
      <path
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconCheck)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconCheck.defaultProps = {
  width: 24,
  height: 24,
  color: colors.grey100,
  style: {},
};

export default IconCheck;
