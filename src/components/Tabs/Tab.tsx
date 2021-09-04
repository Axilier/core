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
        orientation={orientation}
        className={`${styles.tab} ${
            orientation === 'row' ? styles.tabHorizontal : ''
        }`}
        style={{ paddingLeft: orientation === 'row' ? 'unset' : '20px' }}
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
