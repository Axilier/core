/** @format */

// @flow
import * as React from 'react';
import { BasicComponent } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Google = ({ style, className }: BasicComponent): JSX.Element => (
    <svg
        viewBox={'0 0 18 18'}
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
                'M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.141 4.141 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z'
            }
            fill={'#4285f4'}
        />
        <path
            d={
                'M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.859-3.048.859-2.344 0-4.328-1.583-5.036-3.71H.957v2.332A8.998 8.998 0 009 18z'
            }
            fill={'#34a853'}
        />
        <path
            d={
                'M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957a9.005 9.005 0 000 8.084l3.007-2.332z'
            }
            fill={'#fbbc05'}
        />
        <path
            d={
                'M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.581C13.463.892 11.426 0 9 0A8.998 8.998 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z'
            }
            fill={'#ea4335'}
        />
        <path fill={'none'} d={'M0 0h18v18H0z'} />
    </svg>
);
