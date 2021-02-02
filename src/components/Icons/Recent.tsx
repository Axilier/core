/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import '../../css/Icons.css';

export const Recent = ({ style, className, iconColor }: IconProps) => {
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
            <g fill={iconColor || '#fff'}>
                <path d="M1.687 3.54C3.09 1.404 5.476 0 8.179 0 12.495 0 16 3.585 16 8s-3.505 8-7.821 8c-3.139 0-5.848-1.895-7.093-4.626a.794.794 0 01.372-1.044.762.762 0 011.021.38c1 2.195 3.178 3.718 5.7 3.718 3.468 0 6.284-2.88 6.284-6.428s-2.816-6.428-6.284-6.428c-2.145 0-4.04 1.102-5.175 2.781l.568.35c.249.154.392.44.369.736a.785.785 0 01-.478.666l-2.172.898a.754.754 0 01-.685-.056.788.788 0 01-.368-.594L.004 3.97a.793.793 0 01.354-.744.754.754 0 01.808-.008l.52.321z" />
                <path d="M7.468 8.741a.797.797 0 01-.058-.3V5.428c0-.434.344-.786.769-.786.424 0 .768.352.768.786v2.689l1.86 1.901c.3.307.3.805 0 1.112a.756.756 0 01-1.088 0L7.635 8.997a.784.784 0 01-.166-.254l-.001-.002z" />
            </g>
        </svg>
    );
};
