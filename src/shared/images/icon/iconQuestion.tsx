import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconQuestion {
  width?: number;
  height?: number;
  color?: string;
}

const IconQuestion = ({ width, height, color } : PIconQuestion) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="prefix__IconQuestion"
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3v9c0 .55-.45 1-1 1H6l-4 4V3c0-.55.45-1 1-1h13c.55 0 1 .45 1 1zm2 3h2c.55 0 1 .45 1 1v15l-4-4H7c-.55 0-1-.45-1-1v-2h13V6z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__IconQuestion)">
      <path fill={color} d="M0 0h24v24H0z" />
    </g>
  </svg>
);

IconQuestion.defaultProps = {
  width: 24,
  height: 24,
  color: colors.white,
};

export default IconQuestion;
