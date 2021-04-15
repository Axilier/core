/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const AllFiles = ({
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
        className={`${className} ${styles.icon}`}
        style={style}
    >
        <g fill={iconColor || '#fff'}>
            <path
                d={
                    'M12.145 0H4.691L1.296 3.394v10.047h10.849V0zM4.597 1.181v2.115H2.482l2.115-2.115zm6.785 11.493H2.064V3.812h3.045V.768h6.273v11.906z'
                }
                fillRule={'nonzero'}
            />
            <path
                d={
                    'M3.475 5.979H9.97v.767H3.475zM3.475 7.974H9.97v.768H3.475zM3.475 9.966H9.97v.767H3.475z'
                }
            />
            <path
                d={
                    'M13.424 1.663a.382.382 0 00-.383-.384.382.382 0 00-.384.384v12.29H2.959a.382.382 0 00-.383.384c0 .213.17.384.383.384h10.465V1.663z'
                }
                fillRule={'nonzero'}
            />
            <path
                d={
                    'M14.32 2.559a.382.382 0 00-.384.383v12.29H4.239a.382.382 0 00-.384.384c0 .213.17.384.384.384h10.465V2.942a.382.382 0 00-.384-.383z'
                }
                fillRule={'nonzero'}
            />
        </g>
    </svg>
);
