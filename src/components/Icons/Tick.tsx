/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Tick = ({
    style,
    className,
    iconColor,
}: IconProps): JSX.Element => (
    <svg
        viewBox={'0 0 16 16'}
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
                'M11.623 5.37a.547.547 0 00-.78-.003l-4.408 4.44L4.96 8.336a.484.484 0 10-.684.684l1.811 1.812c.097.096.227.173.343.173.115 0 .242-.077.338-.17l4.852-4.876a.418.418 0 00.002-.587V5.37z'
            }
            fill={iconColor || '#fff'}
            fillRule={'nonzero'}
        />
        <path
            d={
                'M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z'
            }
            fill={iconColor || '#fff'}
        />
    </svg>
);
