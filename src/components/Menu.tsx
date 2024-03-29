import React from 'react';
import { MenuProps } from '../Types';
import Layout from './Layout';
import styles from '../css/Menu.module.css';

const Menu = ({ forwardedRef, open, children }: MenuProps): JSX.Element => (
    <Layout
        orientation={'column'}
        className={styles.container}
        style={{ display: open ? 'flex' : 'none' }}
    >
        <div ref={forwardedRef} className={styles.main}>
            {children}
        </div>
    </Layout>
);

export default Menu;
