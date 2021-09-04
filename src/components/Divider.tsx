import React from 'react';
import { DividerProps } from '../Types';
import Layout from './Layout';

const Divider = ({ children, style }: DividerProps): JSX.Element => (
    <Layout
        orientation={'row'}
        style={{
            ...style,
            alignItems: 'center',
            width: '100%',
            fontFamily: "'IBM Plex Sans', sans-serif",
        }}
    >
        <div
            style={{
                backgroundColor: '#BEBEBE',
                width: '100%',
                height: '2px',
            }}
        />
        <div
            style={{
                padding: '0 8px',
                color: '#BEBEBE',
                verticalAlign: 'center',
            }}
        >
            {children}
        </div>
        <div
            style={{
                backgroundColor: '#BEBEBE',
                width: '100%',
                height: '2px',
            }}
        />
    </Layout>
);

export default Divider;
