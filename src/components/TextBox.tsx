import React, { ChangeEvent, useEffect, useState } from 'react';
import Layout from './Layout';
import styles from '../css/TextBox.module.css';
import { TextBoxProps } from '../Types';

const TextBox = ({
    label = '',
    variant = 'outlined',
    size = variant === 'filled' ? 'small' : 'large',
    disabled = false,
    outLineColor = '#057EFF',
    value: newValue = '',
    maxLength,
    width,
    height,
    prefixComponent,
    required,
    type,
    placeholder,
    filter,
    onChange,
    inputStyle,
    suffixComponent,
    units,
}: TextBoxProps): JSX.Element => {
    const [value, setValue] = useState(newValue);

    useEffect(() => setValue(newValue), [newValue]);

    const minWidth = () => (maxLength || 4) * 8 + 70;

    const calcWidth = () => {
        if (width) return `${Math.max(minWidth(), width)}px`;
        switch (size) {
            case 'small':
                return `${minWidth()}px`;
            case 'large':
            default:
                return `${Math.max(minWidth(), 320)}px`;
        }
    };
    const calcHeight = () => {
        if (height) return `${height}px`;
        switch (size) {
            case 'small':
                return '34px';
            case 'large':
            default:
                return '44px';
        }
    };
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const passesFilter = filter ? filter(evt.target.value) : true;
        if (!passesFilter) return;
        setValue(evt.target.value);
        if (onChange) onChange(evt.target.value);
    };

    return (
        <Layout
            orientation={'column'}
            className={styles.textBoxContainer}
            style={{ width: calcWidth() }}
        >
            {label || required ? (
                <>
                    <div className={styles.textBoxLabel}>
                        {label}
                        {required ? (
                            <p
                                className={`${styles.requiredIcon} ${styles.textBoxLabel}`}
                            >
                                *
                            </p>
                        ) : null}
                    </div>
                </>
            ) : null}
            <Layout
                className={styles.textBox}
                orientation={'row'}
                style={{
                    color: disabled ? '#8C8C8C' : '#000000',
                    borderRadius: variant === 'outlined' ? '5px' : '0',
                    height: calcHeight(),
                    border:
                        variant === 'outlined'
                            ? `solid 2px ${outLineColor}`
                            : 'none',
                }}
            >
                {prefixComponent ? (
                    <div
                        className={styles.icon}
                        style={{
                            marginLeft: '7px',
                        }}
                    >
                        {prefixComponent}
                    </div>
                ) : null}
                <input
                    className={styles.textBoxInput}
                    type={type}
                    placeholder={placeholder}
                    style={{
                        height: calcHeight(),
                        lineHeight: calcHeight(),
                        cursor: disabled ? 'not-allowed' : 'text',
                        backgroundColor:
                            variant === 'filled' ? '#F3F3F3' : 'transparent',
                        ...inputStyle,
                    }}
                    value={value}
                    maxLength={maxLength || -1}
                    onChange={handleChange}
                />
                {units ? (
                    <div
                        className={`${styles.textBoxUnits} unit-comp`}
                        style={{
                            backgroundColor:
                                variant === 'filled'
                                    ? '#F3F3F3'
                                    : 'transparent',
                        }}
                    >
                        {units}
                    </div>
                ) : null}
                {suffixComponent ? (
                    <div className={`suffix-comp ${styles.suffix}`}>
                        {suffixComponent}
                    </div>
                ) : null}
            </Layout>
        </Layout>
    );
};

export default TextBox;
