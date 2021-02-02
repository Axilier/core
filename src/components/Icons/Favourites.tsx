/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import '../../css/Icons.css';

export const Favourites = ({ style, className, iconColor }: IconProps) => {
    return (
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
            style={style}
            className={`${className} icon`}
        >
            <g fill={iconColor || '#fff'}>
                <path
                    d="M9.904 16a.456.456 0 00.269-.087l1.885-1.37 1.885 1.37a.457.457 0 00.704-.511l-.718-2.21 1.874-1.3a.457.457 0 00-.26-.833h-2.327l-.722-2.283a.455.455 0 00-.151-.216V3.93l-.128-.133a206.58 206.58 0 01-2.036-2.17A175.311 175.311 0 008.787.141L8.652 0H0v16h9.904zm2.977-4.027h1.201l-.954.662a.457.457 0 00-.174.517l.388 1.194-1.015-.738a.458.458 0 00-.538 0l-1.015.738.388-1.194a.457.457 0 00-.175-.517l-.953-.662h1.201c.2 0 .376-.129.436-.319l.387-1.223.387 1.223c.06.19.236.32.436.32zm-2.06-8.316H8.915V1.61l.595.639c.429.46.891.958 1.313 1.407zM.915.914H8v3.657h3.429v4.818l-.529 1.67H8.573a.457.457 0 00-.26.833l1.874 1.3-.615 1.894H.914V.914z"
                    fillRule="nonzero"
                />
                <path
                    d="M6.629 2.286H2.286V6.4h4.343V2.286zm-.915 3.2H3.2V3.2h2.514v2.286z"
                    fillRule="nonzero"
                />
                <path d="M2 7.771h8.114v.915H2zM2 10.057h6.514v.914H2zM2 12.343h5.333v.914H2z" />
            </g>
        </svg>
    );
};
