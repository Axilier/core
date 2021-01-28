/** @format */

// @flow
import * as React from 'react';
import { ChangeEvent, useState } from 'react';
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
}: TextBoxProps) => {
    const [value, setValue] = useState('');

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
        marginLeft: '10px',
    });

    return (
        <div
            className={'text-box'}
            style={{
                flexDirection: variant === 'filled' ? 'row' : 'column',
                alignItems: variant === 'filled' ? 'center' : 'start',
            }}
        >
            {label !== '' ? (
                <div className={'text-box-label'}>
                    {label}
                    {required ? <div className={'required-icon'}>*</div> : null}
                </div>
            ) : null}
            <div
                className={'text-box-input-units'}
                style={{
                    color: disabled ? '#8C8C8C' : '#000000',
                    height: size === 'small' ? '34px' : '44px',
                    borderRadius: variant === 'outlined' ? '5px' : '0',
                    border:
                        variant === 'outlined' ? 'solid 2px #057EFF' : 'none',
                }}
            >
                <div style={iconStyles(prefixComponent)}>{prefixComponent}</div>
                <input
                    value={value}
                    className={'text-box-input'}
                    placeholder={placeholder}
                    style={{
                        width: size === 'small' ? '30px' : '320px',
                        height: size === 'small' ? '34px' : '44px',
                        cursor: disabled ? 'not-allowed' : 'text',
                        backgroundColor:
                            variant === 'filled' ? '#F3F3F3' : 'transparent',
                    }}
                    onChange={(evt) => handleChange(evt)}
                    maxLength={maxLength || -1}
                    disabled={disabled}
                />
                <div style={iconStyles(suffixComponent)}>{suffixComponent}</div>
                <div
                    style={{
                        display: !units ? 'none' : 'block',
                        marginLeft: '5px',
                    }}
                >
                    {units}
                </div>
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
};

export default TextBox;
