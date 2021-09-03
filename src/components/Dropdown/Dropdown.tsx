import React, { cloneElement, useEffect, useMemo, useState } from 'react';
import { DropdownProps, FixedMouseEvent } from '../../Types';
import styles from '../../css/Dropdown.module.css';
import Option from './Option';

const Dropdown = ({
    label,
    children,
    className,
    required,
    height,
    style,
    onChange,
}: DropdownProps): JSX.Element => {
    const childrenArray = useMemo(
        () => (Array.isArray(children) ? children : [children]),
        [children],
    );

    const [menuStatus, setMenuStatus] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    useEffect(() => {
        childrenArray.forEach(child => {
            if (child.type !== (<Option>test</Option>).type) {
                throw new Error('Children of Dropdown must be of type Option');
            }
        });
    }, [childrenArray]);

    function handleClick(event: MouseEvent) {
        const { target }: FixedMouseEvent = event as FixedMouseEvent;
        const clickedClassName = target.className || '';
        if (clickedClassName.includes('mainBody')) return;
        setMenuStatus(false);
    }

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return function cleanup() {
            window.removeEventListener('click', handleClick);
        };
    });

    return (
        <div className={`${styles.dropdown} ${className}`} style={style}>
            {label ? (
                <div className={styles.label}>
                    {label}
                    {required ? (
                        <div className={styles.required}>{'*'}</div>
                    ) : null}
                </div>
            ) : null}
            <div
                id={'DropdownMainBody'}
                className={styles.mainBody}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        setMenuStatus(!menuStatus);
                    }
                }}
                onClick={() => {
                    setMenuStatus(!menuStatus);
                }}
                role={'button'}
                style={{
                    height: height || '45px',
                }}
            >
                {childrenArray[selectedOption]}
                <svg
                    width={'16'}
                    height={'16'}
                    fill={'black'}
                    className={styles.dropArrow}
                    viewBox={'0 0 16 16'}
                >
                    <path
                        d={
                            'M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'
                        }
                    />
                </svg>
            </div>
            <div
                id={'openMenu'}
                className={styles.openMenu}
                style={{
                    visibility: menuStatus ? 'visible' : 'hidden',
                }}
            >
                {childrenArray.map((child, index) =>
                    cloneElement(child, {
                        key: `${label}-${index}`,
                        onClick: () => {
                            setMenuStatus(false);
                            setSelectedOption(index);
                            if (onChange) onChange(index);
                        },
                    }),
                )}
            </div>
        </div>
    );
};

export default Dropdown;
