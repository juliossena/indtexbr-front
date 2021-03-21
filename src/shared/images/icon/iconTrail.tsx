import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconTrail {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconTrail = ({
 width,
 height,
 color,
 style,
} : PIconTrail) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
  >
    <mask
      id="prefix__IconTrail"
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.34 3.03L20.5 3c.28 0 .5.22.5.5v15.12c0 .23-.15.41-.36.48L15 21l-6-2.1-5.34 2.07-.16.03c-.28 0-.5-.22-.5-.5V5.38c0-.23.15-.41.36-.48L9 3l6 2.1 5.34-2.07zM9 16.78l6 2.11V7.22L9 5.11v11.67z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconTrail)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconTrail.defaultProps = {
    width: 24,
    height: 24,
    color: colors.white,
    style: {},
};

export default IconTrail;
