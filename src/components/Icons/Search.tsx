/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';

export const Search = ({ style, className, iconColor }: IconProps) => {
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
                d="M10.054 11.131a6.196 6.196 0 01-3.83 1.318A6.228 6.228 0 010 6.225 6.227 6.227 0 016.225 0a6.228 6.228 0 016.224 6.225 6.196 6.196 0 01-1.318 3.829l4.646 4.646a.762.762 0 01-1.077 1.077l-4.646-4.646zm-3.83-9.607a4.703 4.703 0 014.702 4.7 4.703 4.703 0 01-4.701 4.702 4.703 4.703 0 01-4.701-4.701c0-2.595 2.106-4.701 4.7-4.701z"
                fill={iconColor || '#fff'}
            />
        </svg>
    );
};
