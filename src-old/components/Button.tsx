/** @format */

// @flow
import * as React from 'react';
import { useState } from 'react';
import { ButtonProps } from '../Types';
import styles from '../css/Button.module.css';

const Button = ({
    btnType,
    label,
    type,
    variant,
    onClick,
    style,
    className,
    btnStyle,
    btnClassName,
    disabled,
    buttonColor,
    altButtonColor,
    buttonIcon,
    iconBackgroundColor,
    size,
}: ButtonProps): JSX.Element => {
    // const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);

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
            className={`${styles.buttonContainer} ${className}`}
            style={{
                width: variant === 'text' ? 'max-content' : btnSize(),
                ...style,
            }}
        >
            <button
                // eslint-disable-next-line react/button-has-type
                type={btnType || 'button'}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`${styles.button} ${btnClassName}`}
                style={{
                    border: border(),
                    backgroundColor: backgroundColor(),
                    color: color(),
                    padding: variant === 'text' ? 'unset' : '5px 20px',
                    width: variant === 'text' ? '' : btnSize(),
                    ...btnStyle,
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
                    className={styles.buttonFilter}
                    style={{
                        opacity: 0.3,
                    }}
                />
            ) : null}
        </div>
    );
};

Button.defaultProps = {
    buttonType: 'button',
    variant: 'outlined',
    type: 'primary',
    label: 'test',
    onClick: () => null,
    disabled: false,
    size: 'small',
};

export default Button;
