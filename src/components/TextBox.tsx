/** @format */

// @flow
import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { TextBoxProps } from '../Types';
import '../css/TextBox.css';

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
}: TextBoxProps) => {
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
        height: size === 'small' ? '10x' : '16px',
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
            case 'small':
                return '30px';
            case 'large':
                return '320px';
            default:
                return size;
        }
    };

    return (
        <div
            className={`core-text-box ${className || ''}`}
            style={{
                flexDirection: variant === 'filled' ? 'row' : 'column',
                alignItems: variant === 'filled' ? 'center' : 'start',
                ...style,
                width: width(),
            }}
        >
            {label !== '' ? (
                <div className={'core-text-box-label'}>
                    {label}
                    {required ? (
                        <div className={'core-required-icon'}>{'*'}</div>
                    ) : null}
                </div>
            ) : null}
            <div
                className={'core-text-box-input-units'}
                style={{
                    color: disabled ? '#8C8C8C' : '#000000',
                    height: calcHeight(),
                    borderRadius: variant === 'outlined' ? '5px' : '0',
                    border:
                        variant === 'outlined'
                            ? `solid 2px ${outLineColor || '#057EFF'}`
                            : 'none',
                    backgroundColor:
                        variant === 'filled' ? '#F3F3F3' : 'transparent',
                }}
            >
                <div style={iconStyles(prefixComponent)}>{prefixComponent}</div>
                <input
                    type={type}
                    value={value}
                    className={'core-text-box-input'}
                    placeholder={placeholder}
                    style={{
                        height: calcHeight(),
                        cursor: disabled ? 'not-allowed' : 'text',
                        backgroundColor:
                            variant === 'filled' ? '#F3F3F3' : 'transparent',
                        ...inputStyle,
                    }}
                    onChange={evt => handleChange(evt)}
                    maxLength={maxLength || -1}
                    disabled={disabled}
                />
                {units ? (
                    <div
                        style={{
                            marginLeft: '5px',
                        }}
                    >
                        {units}
                    </div>
                ) : null}
                {variant !== 'filled' && suffixComponent ? (
                    <div style={iconStyles(suffixComponent)}>
                        {suffixComponent}
                    </div>
                ) : null}
            </div>
            {variant === 'filled' && suffixComponent ? (
                <div style={iconStyles(suffixComponent)}>{suffixComponent}</div>
            ) : null}
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
