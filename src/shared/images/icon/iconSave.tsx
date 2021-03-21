import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconSave {
    width?: number;
    height?: number;
    color?: string;
}

const IconSave = ({ width, height, color } : PIconSave) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="prefix__IconSave"
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
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -680.000000)" fill="#000000">
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path fill={color} d="M50.21875,525 L52.31875,525 L52.31875,523 L50.21875,523 L50.21875,525 Z M61.9,538 L59.8,538 L59.8,532 L58.88125,532 L57.7,532 L49.3,532 L47.5276,532 L47.2,532 L47.2,538 L45.1,538 L45.1,526.837 L47.2,524.837 L47.2,528 L48.11875,528 L49.3,528 L57.7,528 L59.47135,528 L59.8,528 L59.8,522 L61.9,522 L61.9,538 Z M49.3,538 L57.7,538 L57.7,534 L49.3,534 L49.3,538 Z M49.3,522.837 L50.17885,522 L57.7,522 L57.7,526 L49.3,526 L49.3,522.837 Z M63.9664,520 L61.8664,520 L49.3,520 L49.3,520.008 L47.2084,522 L47.2,522 L47.2,522.008 L43.0084,526 L43,526 L43,538 L43,540 L45.1,540 L61.8664,540 L63.9664,540 L64,540 L64,538 L64,522 L64,520 L63.9664,520 Z" id="save_item-[#1409]" />
        </g>
      </g>
    </g>
  </svg>
);

IconSave.defaultProps = {
  width: 24,
  height: 24,
  color: colors.grey100,
};

export default IconSave;
