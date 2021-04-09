/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Connections = ({
    style,
    className,
    iconColor,
}: IconProps): JSX.Element => (
    <svg
        viewBox={'0 0 16 16'}
        xmlns={'http://www.w3.org/2000/svg'}
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        strokeMiterlimit={2.613}
        style={style}
        className={`${className} ${styles.icon}`}
    >
        <g transform={'scale(.73146)'}>
            <clipPath id={'prefix__a'}>
                <path d={'M0 0h21.874v21.161H0z'} />
            </clipPath>
            <g
                stroke={iconColor}
                strokeWidth={0.75}
                clipPath={'url(#prefix__a)'}
            >
                <path
                    d={
                        'M17.95.375a3.55 3.55 0 11-.001 7.1 3.55 3.55 0 01.001-7.1zm0 .633a2.917 2.917 0 10.001 5.833 2.917 2.917 0 00-.001-5.833z'
                    }
                    fill={'#231f20'}
                />
                <path
                    d={
                        'M14.41 16.982l-7.425-4.637a3.526 3.526 0 00.488-1.798c0-.656-.178-1.271-.488-1.798l7.421-4.636a3.55 3.55 0 003.335 3.354v6.226a3.55 3.55 0 00-3.331 3.289z'
                    }
                    fill={'none'}
                />
                <path
                    d={
                        'M17.95 13.688a3.55 3.55 0 11-.001 7.1 3.55 3.55 0 01.001-7.1zm0 .632a2.917 2.917 0 10.001 5.833 2.917 2.917 0 00-.001-5.833zM3.924 6.999a3.55 3.55 0 110 7.098 3.55 3.55 0 010-7.098zm0 .633a2.917 2.917 0 10.001 5.833 2.917 2.917 0 00-.001-5.833z'
                    }
                    fill={'#231f20'}
                />
            </g>
        </g>
    </svg>
);
