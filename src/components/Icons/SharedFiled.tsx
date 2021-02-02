/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';

export const SharedFiles = ({ style, className, iconColor }: IconProps) => {
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
                d="M12.145 0H4.691L1.296 3.394v10.047h10.849V0zM4.597 1.181v2.115H2.482l2.115-2.115zm6.785 11.493H2.064V3.812h3.045V.768h6.273v11.906z"
                fill={iconColor || '#fff'}
                fillRule="nonzero"
            />
            <path
                d="M13.424 1.663a.382.382 0 00-.383-.384.382.382 0 00-.384.384v12.29H2.959a.382.382 0 00-.383.384c0 .213.17.384.383.384h10.465V1.663z"
                fill={iconColor || '#fff'}
                fillRule="nonzero"
            />
            <path
                d="M14.32 2.559a.382.382 0 00-.384.383v12.29H4.239a.382.382 0 00-.384.384c0 .213.17.384.384.384h10.465V2.942a.382.382 0 00-.384-.383z"
                fill={iconColor || '#fff'}
                fillRule="nonzero"
            />
            <path
                d="M7.811 5.7a1.273 1.273 0 11.264.435L6.009 7.387a1.266 1.266 0 01.027.774l1.982 1.02a1.273 1.273 0 11-.233.452l-1.982-1.02a1.273 1.273 0 11-.057-1.66L7.81 5.7z"
                fill={iconColor || '#fff'}
            />
        </svg>
    );
};
