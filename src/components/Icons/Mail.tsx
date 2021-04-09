/** @format */

import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Mail = ({
    iconColor,
    style,
    className,
}: IconProps): JSX.Element => (
    <svg
        viewBox={'0 0 20 17'}
        xmlns={'http://www.w3.org/2000/svg'}
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        strokeLinejoin={'round'}
        strokeMiterlimit={2}
        style={style}
        className={`${className} ${styles.icon}`}
    >
        <path
            d={
                'M.913.002H.909C.41.002 0 .41 0 .91v14.545c0 .5.41.91.91.91H19.09c.499 0 .909-.41.909-.91V.911c0-.5-.41-.91-.91-.91H.914zM3.268 1.82h13.487l-6.75 6.055L3.268 1.82zm-1.45 1.146l7.576 6.8c.343.309.87.309 1.214 0l7.575-6.782v11.563H1.817V2.966z'
            }
            fill={iconColor || '#bebebe'}
            fillRule={'nonzero'}
        />
    </svg>
);
