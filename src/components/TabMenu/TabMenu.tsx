/** @format */

// @flow
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { TabMenuProps } from '../../Types';
import { TabMenuContext } from '../../Contex';
import styles from '../../css/TabMenu.module.css';
import Tab from './Tab';

const TabMenu = ({
    children,
    direction,
    tabIndicatorColor,
    tabNotSelectedColor,
    tabSelectedColor,
    tabFontColor,
    onChange,
    showNotSelectedShadow,
}: TabMenuProps) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(
        direction === 'horizontal' ? 0 : 2,
    );
    const [indicatorHeight, setIndicatorHeight] = useState(
        direction === 'horizontal' ? 2 : 0,
    );
    const [backgroundWidth, setBackgroundWidth] = useState(0);
    const [backgroundHeight, setBackgroundHeight] = useState(0);
    const menu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const firstChild = menu.current?.children[0];
        if (direction === 'horizontal') {
            setIndicatorWidth(firstChild?.clientWidth || 0);
        } else {
            setIndicatorHeight(menu.current?.children[0].clientHeight || 0);
        }
        setBackgroundWidth(firstChild?.clientWidth || 0);
        setBackgroundHeight(firstChild?.clientHeight || 0);
    }, [menu.current?.children]);

    useEffect(() => {
        if (!onChange) return;
        onChange(selectedTab);
    }, [selectedTab]);

    const newChildren = () => {
        if (!Array.isArray(children)) {
            return (
                <Tab
                    index={0}
                    {...children.props}
                    direction={direction}
                    tabSelectedColor={tabSelectedColor}
                    tabNotSelectedColor={tabNotSelectedColor}
                    showNotSelectedShadow={showNotSelectedShadow}
                >
                    {children.props.children}
                </Tab>
            );
        }
        return children.map(({ props }, index) => (
            <Tab
                key={props.children ? props.children.toString() : index}
                index={index}
                {...props}
                direction={direction}
                tabSelectedColor={tabSelectedColor}
                tabNotSelectedColor={tabNotSelectedColor}
                showNotSelectedShadow={showNotSelectedShadow}
            >
                {props.children}
            </Tab>
        ));
    };

    return (
        <TabMenuContext.Provider
            value={{
                selectedTab,
                setSelectedTab,
            }}
        >
            <div
                className={styles.tabMenu}
                ref={menu}
                style={{
                    height: direction === 'horizontal' ? '40px' : 'unset',
                    width: direction === 'horizontal' ? '100%' : 'inherit',
                    flexDirection:
                        direction === 'horizontal' ? 'row' : 'column',
                    color: tabFontColor || tabIndicatorColor || '#057AFF',
                }}
            >
                {newChildren()}
                <div
                    className={styles.tabSelectedBlock}
                    style={{
                        left:
                            direction === 'horizontal'
                                ? indicatorWidth * selectedTab
                                : '0px',
                        top:
                            direction === 'vertical'
                                ? indicatorHeight * selectedTab
                                : 'unset',
                        width: indicatorWidth,
                        height: indicatorHeight,
                        backgroundColor: tabIndicatorColor || '#057AFF',
                    }}
                />
                <div
                    className={styles.tabSelectedBackground}
                    style={{
                        left:
                            direction === 'horizontal'
                                ? indicatorWidth * selectedTab
                                : '0px',
                        top:
                            direction === 'vertical'
                                ? indicatorHeight * selectedTab
                                : 'unset',
                        width: backgroundWidth,
                        height: backgroundHeight,
                        backgroundColor: tabSelectedColor || '#F4F4F4',
                    }}
                />
            </div>
        </TabMenuContext.Provider>
    );
};
TabMenu.defaultProps = {
    direction: 'horizontal',
};

export default TabMenu;
