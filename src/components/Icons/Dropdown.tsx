/** @format */

// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { DropdownProps } from '../../Types';
import styles from '../../css/Icons.module.css';

export const Dropdown = ({
    style,
    className,
    open,
    onChange,
}: DropdownProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(open || false);

    useEffect(() => {
        setIsOpen(open || false);
    }, [open]);

    return (
        <svg
            // transform={}
            viewBox={'0 0 16 16'}
            xmlns={'http://www.w3.org/2000/svg'}
            fillRule={'evenodd'}
            clipRule={'evenodd'}
            strokeLinejoin={'round'}
            strokeMiterlimit={2}
            style={{ transform: isOpen ? 'rotate(90deg)' : 'none', ...style }}
            className={`${className} ${styles.dropdown} ${styles.icon}`}
            onClick={() => {
                setIsOpen(!isOpen);
                if (!onChange) return;
                onChange(isOpen);
            }}
        >
            <g transform={'matrix(.72802 0 0 .72806 -1044.709 -250.453)'}>
                <circle cx={1446} cy={355} r={11} fill={'#ebebeb'} />
                <path
                    d={
                        'M1446 344c6.07 0 11 4.929 11 11s-4.93 11-11 11-11-4.929-11-11 4.93-11 11-11zm0 .174c5.98 0 10.83 4.851 10.83 10.826 0 5.975-4.85 10.826-10.83 10.826-5.97 0-10.83-4.851-10.83-10.826 0-5.975 4.86-10.826 10.83-10.826z'
                    }
                    fill={'#d3d3d3'}
                />
            </g>
            <path
                d={'M11.839 7.785l-5.881 4.227V3.558l5.88 4.227z'}
                fill={'#d3d3d3'}
            />
        </svg>
    );
};

Dropdown.defaultProps = {
    open: false,
};
