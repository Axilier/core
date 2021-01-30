/** @format */

// @flow
import * as React from 'react';
import { useState } from 'react';
import { ButtonProps } from '../Types';
import '../css/Button.css';

const Button = ({
    label,
    type,
    variant,
    onClick,
    style,
    className,
    disabled,
}: ButtonProps) => {
    const [clicked, setClicked] = useState(false);

    const primaryColour = (): string => {
        switch (type) {
            case 'primary':
                return '#057AFF';
            case 'secondary':
                return 'white';
            case 'tertiary':
                return 'black';
            default:
                return 'black';
        }
    };
    const secondaryColour = (): string => {
        switch (type) {
            case 'primary':
                return 'white';
            case 'secondary':
                return '#057AFF';
            case 'tertiary':
                return 'white';
            default:
                return 'white';
        }
    };

    return (
        <>
            <button
                onMouseDown={() => setClicked(true)}
                onMouseUp={() => setClicked(false)}
                type={'button'}
                className={`button ${className}`}
                style={{
                    border:
                        variant === 'outlined'
                            ? `solid 2px ${primaryColour()}`
                            : 'none',
                    backgroundColor:
                        variant === 'contained'
                            ? primaryColour()
                            : 'transparent',
                    color:
                        variant === 'contained'
                            ? secondaryColour()
                            : primaryColour(),
                    ...style,
                }}
                onClick={() => {
                    if (!onClick) return;
                    onClick();
                }}
            >
                {label}
            </button>
            <div
                className={'button-filter'}
                style={{
                    opacity: disabled ? 0.1 : clicked ? 0.1 : 0,
                }}
            />
        </>
    );
};

Button.defaultProps = {
    variant: 'outlined',
    type: 'primary',
    label: 'test',
    onClick: () => {},
    disabled: false,
};

export default Button;
