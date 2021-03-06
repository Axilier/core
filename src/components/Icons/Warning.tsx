/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Warning = ({
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
                'M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.76A6.243 6.243 0 0114.24 8 6.243 6.243 0 018 14.24 6.243 6.243 0 011.76 8 6.243 6.243 0 018 1.76z'
            }
            fill={iconColor || '#fff'}
        />
        <path fill={iconColor || '#fff'} d={'M7 3h2v7H7zM7 11h2v2H7z'} />
    </svg>
);
