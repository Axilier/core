import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Cross = ({
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
        <g fill={iconColor || '#fff'}>
            <path
                d={
                    'M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z'
                }
            />
            <path
                d={
                    'M8 6.586l2.121-2.122a1.002 1.002 0 011.415 0c.39.391.39 1.024 0 1.415L9.414 8l2.104 2.104a1.025 1.025 0 010 1.449l-.001.001a.974.974 0 01-1.377 0L8 9.414l-2.121 2.122c-.391.39-1.024.39-1.415 0a1.002 1.002 0 010-1.415L6.586 8l-2.14-2.14a.974.974 0 010-1.377l.001-.001a1.026 1.026 0 011.449 0L8 6.586z'
                }
            />
        </g>
    </svg>
);
