/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Key = ({
    iconColor,
    style,
    className,
}: IconProps): JSX.Element => (
    <svg
        viewBox={'0 0 21 21'}
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
                'M20.024.36v3.575a.36.36 0 01-.358.358h-2.503v2.503a.36.36 0 01-.358.357h-2.503v2.504a.357.357 0 01-.103.253l-1.652 1.652c.216.653.326 1.337.326 2.025 0 3.53-2.905 6.436-6.436 6.436S.001 17.118.001 13.587s2.905-6.436 6.436-6.436c.69 0 1.375.11 2.03.328l7.37-7.373a.357.357 0 01.253-.104h3.576a.36.36 0 01.358.357zm-.716 3.218V.718h-3.071L8.813 8.143a.358.358 0 01-.379.082 5.724 5.724 0 00-1.996-.36c-3.139 0-5.722 2.583-5.722 5.722 0 3.138 2.583 5.72 5.722 5.72 3.138 0 5.721-2.582 5.721-5.72 0-.682-.122-1.358-.36-1.997a.358.358 0 01.083-.375l1.705-1.706V6.796a.36.36 0 01.358-.358h2.503V3.935a.36.36 0 01.357-.357h2.503z'
            }
            fill={iconColor || '#bebebe'}
            fillRule={'nonzero'}
        />
        <path
            d={
                'M9.194 13.661a2.515 2.515 0 01-2.503 2.503 2.515 2.515 0 01-2.503-2.503 2.515 2.515 0 012.503-2.503 2.515 2.515 0 012.503 2.503zm-4.29 0c0 .98.806 1.788 1.787 1.788.981 0 1.788-.807 1.788-1.788 0-.98-.807-1.788-1.788-1.788-.98 0-1.788.807-1.788 1.788z'
            }
            fill={iconColor || '#bebebe'}
            fillRule={'nonzero'}
        />
    </svg>
);
