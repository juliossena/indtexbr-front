import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconEdit {
    width?: number;
    height?: number;
    color?: string;
}

const IconEdit = ({ width, height, color } : PIconEdit) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconEdit"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.347 4.652a.896.896 0 000-1.301l-2.242-2.16a.98.98 0 00-1.352 0L14.875 3l3.594 3.46 1.878-1.809zM17.51 7.385l-3.593-3.462-9.584 9.231v3.462h3.594l9.583-9.231zm5.99 12H.5v3.692h23v-3.692z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconEdit)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconEdit.defaultProps = {
    width: 24,
    height: 24,
    color: colors.grey100,
};

export default IconEdit;
