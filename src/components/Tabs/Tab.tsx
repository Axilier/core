import React from 'react';
import styles from '../../css/TabMenu.module.css';
import Layout from '../Layout';
import { TabProps } from '../../Types';

const Tab = ({
    orientation = 'row',
    showNotSelectedShadow = true,
    children,
    onClick,
}: TabProps): JSX.Element => (
    <Layout
        center
        orientation={'row'}
        className={`${styles.tab} ${
            orientation === 'row' ? styles.tabHorizontal : ''
        }`}
        onClick={() => {
            if (onClick) onClick();
        }}
    >
        {children}
        <div
            className={`${styles.tabSelectedShadow} ${
                orientation === 'row'
                    ? styles.horizontalShadow
                    : styles.verticalShadow
            }`}
            style={{
                display: showNotSelectedShadow ? 'block' : 'none',
            }}
        />
    </Layout>
);

export default Tab;
