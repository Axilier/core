/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import '../../css/Icons.css';

export const Copyright = ({ style, className, iconColor }: IconProps) => {
    return (
        <svg
            viewBox={'0 0 16 16'}
            xmlns={'http://www.w3.org/2000/svg'}
            fillRule={'evenodd'}
            clipRule={'evenodd'}
            strokeLinejoin={'round'}
            strokeMiterlimit={2}
            style={style}
            className={`${className} icon`}
        >
            <path
                d="M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.52A6.484 6.484 0 0114.48 8 6.484 6.484 0 018 14.48 6.484 6.484 0 011.52 8 6.484 6.484 0 018 1.52z"
                fill={iconColor || '#fff'}
            />
            <text
                x={8.277}
                y={8.234}
                fontFamily="'ArialMT','Arial',sans-serif"
                fontSize={12}
                fill={iconColor || '#fff'}
                transform="translate(-4.671 4.061)"
            >
                {'C'}
            </text>
        </svg>
    );
};
