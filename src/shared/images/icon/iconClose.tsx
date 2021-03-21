import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconClose {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconClose = ({
 width,
 height,
 color,
 style,
} : PIconClose) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconClose"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={8}
      height={8}
    >
      <path
        d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6 9.5 3.205z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconClose)">
      <path fill={color} d="M0 0h12v12H0z" />
    </g>
  </svg>
);

IconClose.defaultProps = {
    width: 12,
    height: 12,
    color: colors.primary,
    style: {},
};

export default IconClose;
