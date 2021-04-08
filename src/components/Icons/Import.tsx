/** @format */

// @flow
import * as React from 'react';
import { IconProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Import = ({
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
        style={style}
        className={`${className} ${styles.icon}`}
    >
        <path
            d={
                'M2.508 15.99c-1.416 0-2.5-1.167-2.5-2.5V5.324c0-.5.334-.833.834-.833a.99.99 0 011 .833v8.083c0 .416.333.833.833.833h10.75c.416 0 .833-.417.833-.833V2.574c0-.417-.417-.833-.834-.833h-2.833c-.5 0-.916-.417-.833-.917 0-.5.333-.833.833-.833h2.917c1.333 0 2.5 1.083 2.5 2.5v11c0 1.332-1.167 2.499-2.5 2.499h-11zm7.417-6.333l-5.833-1.5c-.25 0-.417-.25-.417-.5-.083-.167.083-.417.25-.583l1.75-.917c-.083-.166-.167-.25-.25-.416-.833-1.417-2.5-3.75-4.75-3.667-.167 0-.417-.083-.5-.333 0 0 0-.084-.083-.084 0-.25.083-.583.333-.666A6.743 6.743 0 015.342.324c1.833.5 3.416 1.75 4.416 3.417l1.667-.917c.25-.167.5-.167.666 0 .167.167.25.417.167.583L10.675 9.24a.627.627 0 01-.584.417h-.166zm-6.667-8c1.417.834 2.5 2 3.25 3.417.167.25.333.5.5.833.083.25 0 .5-.25.667l-.833.5 3.5.833 1-3.416-.917.5c-.25.083-.5 0-.667-.167-.75-1.5-2-2.583-3.583-3.083-.333-.084-.75-.084-1.083-.084h-.917z'
            }
            fill={iconColor || '#fff'}
            fillRule={'nonzero'}
        />
    </svg>
);
