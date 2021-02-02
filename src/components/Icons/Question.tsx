/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';

export const Question = ({ style, className, iconColor }: IconProps) => {
    return (
        <svg
            viewBox={'0 0 16 16'}
            xmlns={'http://www.w3.org/2000/svg'}
            fillRule={'evenodd'}
            clipRule={'evenodd'}
            strokeLinejoin={'round'}
            strokeMiterlimit={2}
            style={{
                width: '20px',
                height: '20px',
                ...style,
            }}
            className={className}
        >
            <path
                d="M8 0c4.415 0 8 3.585 8 8s-3.585 8-8 8-8-3.585-8-8 3.585-8 8-8zm0 1.76A6.243 6.243 0 0114.24 8 6.243 6.243 0 018 14.24 6.243 6.243 0 011.76 8 6.243 6.243 0 018 1.76z"
                fill={iconColor || '#fff'}
            />
            <path fill={iconColor || '#fff'} d="M7 3h2v7H7zM7 11h2v2H7z" />
        </svg>
    );
};
