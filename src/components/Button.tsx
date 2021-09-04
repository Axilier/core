import React, { useState } from 'react';
import { ButtonProps } from '../Types';
import styles from '../css/Button.module.css';

const Button = ({
    btnType = 'button',
    variant = 'contained',
    btnColor = 'primary',
    btnStyles = {},
    btnIconBackgroundColor = 'white',
    disabled = false,
    btnIcon,
    children,
    onClick,
    style,
    className,
    id,
}: ButtonProps): JSX.Element => {
    const [hovered, setHovered] = useState(false);
    const mainColour = () => {
        switch (btnColor) {
            case 'primary':
                return '#057AFF';
            case 'secondary':
                return 'black';
            default:
                return btnColor;
        }
    };
    const backgroundColour = () => {
        switch (variant) {
            case 'contained':
                return hovered ? 'white' : mainColour();
            case 'outlined':
                return hovered ? mainColour() : 'white';
            case 'text':
                return 'transparent';
            default:
                return hovered ? 'white' : mainColour();
        }
    };
    const border = () => {
        switch (variant) {
            case 'contained':
                return hovered
                    ? `solid 2px ${mainColour()}`
                    : 'solid 2px transparent';
            case 'outlined':
                return `solid 2px ${mainColour()}`;
            case 'text':
                return 'none';
            default:
                return hovered
                    ? `solid 2px ${mainColour()}`
                    : 'solid 2px transparent';
        }
    };
    const textColor = () => {
        switch (variant) {
            case 'contained':
                return hovered ? mainColour() : 'white';
            case 'outlined':
                return hovered ? 'white' : mainColour();
            case 'text':
                return mainColour();
            default:
                return hovered ? mainColour() : 'white';
        }
    };
    const padding = () =>
        children && children.toString().length > 14 ? '10px' : '5px';

    return (
        <div className={`${styles.buttonContainer} ${className}`} style={style}>
            <button
                id={id || 'button'}
                // eslint-disable-next-line react/button-has-type
                type={btnType || 'button'}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={styles.button}
                onClick={onClick}
                style={{
                    backgroundColor: backgroundColour(),
                    color: textColor(),
                    border: border(),
                    padding: variant === 'text' ? 'unset' : `${padding()} 20px`,
                    ...btnStyles,
                }}
            >
                {btnIcon ? (
                    <div
                        id={'icon-container'}
                        className={styles.buttonIcon}
                        style={{
                            backgroundColor: btnIconBackgroundColor || 'white',
                        }}
                    >
                        {btnIcon}
                    </div>
                ) : null}
                {children}
            </button>
            {disabled ? <span id={'filter'} className={styles.filter} /> : null}
        </div>
    );
};

export default Button;
