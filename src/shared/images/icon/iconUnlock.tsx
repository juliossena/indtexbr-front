import * as React from 'react';
import { colors } from '../../functions/colors';

interface PIconUnlock {
    width?: number;
    height?: number;
    color?: string;
}

const IconUnlock = ({ width, height, color } : PIconUnlock) => (
  <svg
    width={width}
    height={height}
    aria-hidden="true"
    data-prefix="fas"
    data-icon="unlock-alt"
    className="prefix__svg-inline--fa prefix__fa-unlock-alt prefix__fa-w-14"
    viewBox="0 0 448 512"
  >
    <path
      fill={color}
      d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z"
    />
  </svg>
  );

IconUnlock.defaultProps = {
    width: 16,
    height: 16,
    color: colors.green,
  };

export default IconUnlock;
