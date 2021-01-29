/** @format */

// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { TickboxProps } from '../Types';
import '../css/Tickbox.css';

const Tickbox = ({ ticked, onChange, className, style }: TickboxProps) => {
    const [isTicked, setIsTicked] = useState(ticked);

    useEffect(() => setIsTicked(ticked), [ticked]);

    return (
        <svg
            className={`tick-box ${className}`}
            onClick={() => {
                setIsTicked(!isTicked);
                if (!onChange) return;
                onChange();
            }}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit={2}
            style={style}
        >
            <path
                d="M63.994 0h-64v64h64V0zM2.552 2.545v58.914h58.884V2.544H2.552z"
                fill="#d3d3d3"
            />
            {isTicked ? (
                <path
                    d="M24.442 50.674c-.605.605-1.463 1.11-2.22 1.11-.758 0-1.615-.53-2.246-1.136L5.844 36.517l4.492-4.492 11.91 11.91L53.74 12.217l4.416 4.568-33.714 33.89z"
                    fill="#6f7b91"
                    fillRule="nonzero"
                />
            ) : null}
        </svg>
    );
};

Tickbox.defaultProps = {
    onChange: () => {},
};

export default Tickbox;
