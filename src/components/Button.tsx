/** @format */

// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
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
    buttonColor,
    altButtonColor,
    buttonIcon,
    iconBackgroundColor,
    size,
}: ButtonProps) => {
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => console.log(hover), [hover]);

    const primaryColour = (): string => {
        switch (type) {
            case 'primary':
                return buttonColor || '#057AFF';
            case 'secondary':
                return buttonColor || 'white';
            case 'tertiary':
                return buttonColor || 'black';
            default:
                return buttonColor || 'black';
        }
    };
    const secondaryColour = (): string => {
        switch (type) {
            case 'primary':
                return altButtonColor || 'white';
            case 'secondary':
                return altButtonColor || '#057AFF';
            case 'tertiary':
                return altButtonColor || 'white';
            default:
                return altButtonColor || 'white';
        }
    };

    const border = () => {
        switch (variant) {
            case 'contained':
                return hover
                    ? `solid 2px ${primaryColour()}`
                    : 'solid 2px transparent';
            case 'outlined':
                return `solid 2px ${primaryColour()}`;
            case 'text':
                return 'none';
            default:
                return 'none';
        }
    };
    const backgroundColor = () => {
        switch (variant) {
            case 'contained':
                return hover ? secondaryColour() : primaryColour();
            case 'outlined':
                return hover ? primaryColour() : 'transparent';
            case 'text':
                return 'transparent';
            default:
                return primaryColour();
        }
    };
    const color = () => {
        switch (variant) {
            case 'contained':
                return hover ? primaryColour() : secondaryColour();
            case 'outlined':
                return hover ? secondaryColour() : primaryColour();
            case 'text':
                return primaryColour();
            default:
                return primaryColour();
        }
    };

    const btnSize = (): string => {
        switch (size) {
            case 'small':
                return '150px';
            case 'large':
                return '320px';
            default:
                return size || '';
        }
    };

    return (
        <div
            className={'button-container'}
            style={{ width: variant === 'text' ? '' : btnSize() }}
        >
            <button
                onMouseDown={() => setClicked(true)}
                onMouseUp={() => setClicked(false)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                type={'button'}
                className={`button ${className}`}
                style={{
                    border: border(),
                    backgroundColor: backgroundColor(),
                    color: color(),
                    padding: variant === 'text' ? 'none' : '5px 35px',
                    width: variant === 'text' ? '' : btnSize(),
                    ...style,
                }}
                onClick={() => {
                    if (!onClick) return;
                    onClick();
                }}
            >
                {buttonIcon ? (
                    <div
                        style={{
                            backgroundColor: iconBackgroundColor || 'white',
                        }}
                    >
                        {buttonIcon}
                    </div>
                ) : null}
                {label}
            </button>
            {disabled ? (
                <div
                    className={'button-filter'}
                    style={{
                        opacity: 0.3,
                    }}
                />
            ) : null}
        </div>
    );
};

Button.defaultProps = {
    variant: 'outlined',
    type: 'primary',
    label: 'test',
    onClick: () => {},
    disabled: false,
    size: 'small',
};

export default Button;
