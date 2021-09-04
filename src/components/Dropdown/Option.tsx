import React from 'react';
import { OptionProps } from '../../Types';
import styles from '../../css/Dropdown.module.css';

const Option = ({ onClick, children }: OptionProps): JSX.Element => (
    <div
        role={'button'}
        className={styles.option}
        onClick={() => {
            if (onClick) onClick();
        }}
    >
        {children}
    </div>
);

export default Option;
