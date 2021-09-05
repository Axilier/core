import React, { useEffect, useMemo, useRef, useState } from 'react';
import Tab from './Tab';
import styles from '../../css/TabMenu.module.css';
import Layout from '../Layout';
import { TabsProps } from '../../Types';

const Tabs = ({
    showNotSelectedShadow = true,
    tabNotSelectedColor = '',
    tabSelectedColor = '',
    tabIndicatorColor = '',
    tabFontColor = 'black',
    onChange,
    children,
    orientation,
    width,
}: TabsProps): JSX.Element => {
    const childrenArray = useMemo(
        () => (Array.isArray(children) ? children : [children]),
        [children],
    );
    const [selectedIndicatorWidth, setSelectedIndicatorWidth] = useState(0);
    const [selectedTab, setSelectedTab] = useState(0);

    const menu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSelectedIndicatorWidth(
            (menu.current?.clientWidth || 0) /
                (Array.isArray(children) ? children.length : 1),
        );
    }, [menu.current?.clientWidth, children]);
    useEffect(() => {
        childrenArray.forEach(child => {
            if (
                child.type !==
                (
                    <Tab>
                        <></>
                    </Tab>
                ).type
            ) {
                throw new Error('children of TabMenu must be of type Tab');
            }
        });
    }, [childrenArray]);

    return (
        <Layout
            orientation={orientation}
            elemRef={menu}
            className={styles.tabMenu}
            style={{
                maxHeight: `${40 * childrenArray.length}px`,
                width: width || '100%',
                color: tabFontColor,
                backgroundColor: tabNotSelectedColor || 'transparent',
            }}
        >
            {childrenArray.map((child, index) => (
                <Tab
                    orientation={orientation}
                    showNotSelectedShadow={showNotSelectedShadow}
                    key={`${
                        child.props.children?.toString() || 'invalid'
                    }-loop`}
                    onClick={() => {
                        setSelectedTab(index);
                        if (onChange) onChange(index);
                    }}
                >
                    {child.props.children}
                </Tab>
            ))}
            <div
                key={'indicator'}
                id={'indicator'}
                className={styles.tabIndicator}
                style={{
                    backgroundColor: tabIndicatorColor || '#057AFF',
                    width:
                        orientation === 'row'
                            ? `calc( 100% / ${childrenArray.length})`
                            : '2px',
                    height:
                        orientation === 'row'
                            ? '2px'
                            : `calc( 100% / ${childrenArray.length})`,
                    top:
                        orientation === 'row'
                            ? `calc( 100% - 2px )`
                            : selectedTab * 40,
                    left:
                        orientation === 'row'
                            ? selectedTab * selectedIndicatorWidth
                            : 0,
                }}
            />
            <div
                key={'selectedTab'}
                id={'selectedTab'}
                className={styles.tabSelectedBackground}
                style={{
                    height: orientation === 'row' ? '100%' : '40px',
                    width:
                        orientation === 'row' ? selectedIndicatorWidth : '100%',
                    top: orientation === 'row' ? 0 : selectedTab * 40,
                    left:
                        orientation === 'row'
                            ? selectedTab * selectedIndicatorWidth
                            : 0,
                    backgroundColor: tabSelectedColor || '#F4F4F4',
                }}
            />
        </Layout>
    );
};

export default Tabs;
