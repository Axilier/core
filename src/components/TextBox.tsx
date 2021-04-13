/** @format */

// @flow
import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { TextBoxProps } from '../Types';
import styles from '../css/TextBox.module.css';

const TextBox = ({
    label,
    prefixComponent,
    suffixComponent,
    filter,
    placeholder,
    size,
    variant,
    required,
    disabled,
    maxLength,
    units,
    onChange,
    className,
    style,
    value: newValue,
    type,
    inputStyle,
    outLineColor,
    height,
}: TextBoxProps): JSX.Element => {
    const [value, setValue] = useState(newValue);

    useEffect(() => setValue(newValue), [newValue]);

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        const isFiltered = filter ? filter(evt.target.value) : true;
        if (!isFiltered) return;
        setValue(evt.target.value);
        if (!onChange) return;
        onChange(evt.target.value);
    }

    const iconStyles = (component: JSX.Element | undefined) => ({
        display: !component ? 'none' : 'block',
        height: size === 'small' ? '10x' : '20px',
        width: size === 'small' ? '12x' : '20px',
    });

    const calcHeight = () => {
        switch (size) {
            case 'small':
                return '34px';
            case 'large':
                return '44px';
            default:
                return height || '34px';
        }
    };

    const width = () => {
        switch (size) {
            case 'small' || undefined:
                return `${(maxLength || 2) * 8 + 60}px`;
            case 'large':
                return '320px';
            default:
                return size;
        }
    };

    return (
        <div
            className={`${styles.textBox} ${className || ''}`}
            style={{
                flexDirection: variant === 'filled' ? 'row' : 'column',
                alignItems: variant === 'filled' ? 'center' : 'start',
                ...style,
                width: width(),
            }}
        >
            {label !== '' ? (
                <div className={styles.textBoxLabel}>
                    {label}
                    {required ? (
                        <div className={styles.requiredIcon}>{'*'}</div>
                    ) : null}
                </div>
            ) : null}
            <div
                className={styles.textBoxInputWithUnits}
                style={{
                    color: disabled ? '#8C8C8C' : '#000000',
                    height: calcHeight(),
                    borderRadius: variant === 'outlined' ? '5px' : '0',
                    border:
                        variant === 'outlined'
                            ? `solid 2px ${outLineColor || '#057EFF'}`
                            : 'none',
                }}
            >
                <div
                    className={styles.textBoxInputWithUnits}
                    style={{
                        backgroundColor:
                            variant === 'filled' ? '#F3F3F3' : 'transparent',
                    }}
                >
                    <div
                        style={{
                            marginLeft: '7px',
                            ...iconStyles(prefixComponent),
                        }}
                    >
                        {prefixComponent}
                    </div>
                    <input
                        type={type}
                        value={value}
                        className={styles.textBoxInput}
                        placeholder={placeholder}
                        style={{
                            height: calcHeight(),
                            lineHeight: calcHeight(),
                            cursor: disabled ? 'not-allowed' : 'text',
                            backgroundColor:
                                variant === 'filled'
                                    ? '#F3F3F3'
                                    : 'transparent',
                            ...inputStyle,
                        }}
                        onChange={evt => handleChange(evt)}
                        maxLength={maxLength || -1}
                        disabled={disabled}
                    />
                    {units ? (
                        <div className={styles.textBoxInputUnits}>{units}</div>
                    ) : null}
                    {variant !== 'filled' && suffixComponent ? (
                        <div
                            style={{
                                marginRight: '7px',
                                ...iconStyles(suffixComponent),
                            }}
                        >
                            {suffixComponent}
                        </div>
                    ) : null}
                </div>
                {variant === 'filled' && suffixComponent ? (
                    <div style={iconStyles(suffixComponent)}>
                        {suffixComponent}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

TextBox.defaultProps = {
    units: '',
    disabled: false,
    label: '',
    size: 'small',
    variant: 'filled',
    onChange: () => null,
    value: '',
};

export default TextBox;
