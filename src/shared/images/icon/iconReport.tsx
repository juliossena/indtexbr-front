import * as React from 'react';
import { CSSProperties } from 'styled-components';
import { colors } from '../../functions/colors';

interface PIconReport {
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
}

const IconReport = ({
 width, height, color, style,
} : PIconReport) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
  >
    <mask
      id="prefix_IconReport"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm5 5h10V9H9v2zm6 4H9v-2h6v2zM9 7h10V5H9v2z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix_IconReport)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconReport.defaultProps = {
    width: 24,
    height: 24,
    color: colors.primary,
    style: {},
};

export default IconReport;
