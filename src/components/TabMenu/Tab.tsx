/** @format */

// @flow
import * as React from 'react';
import { TabType } from '../../Types';
import { TabMenuContext } from '../../Contex';
import '../../css/TabMenu.css';

const Tab = ({
    children,
    index,
    direction,
    showNotSelectedShadow,
}: TabType) => {
    const shadowStyles = () => {
        switch (direction) {
            case 'horizontal':
                return {
                    width: 'calc(100% - 2px)',
                    height: '2px',
                    left: 2,
                };
            case 'vertical':
                return {
                    height: 'calc(100% - 2px)',
                    width: '2px',
                    left: '0px',
                    top: '2px',
                };
            default:
                return {};
        }
    };

    return (
        <TabMenuContext.Consumer>
            {context => (
                <div
                    role={'tab'}
                    className={`${
                        direction === 'horizontal'
                            ? 'web-tab web-tab-horizontal'
                            : 'web-tab'
                    }`}
                    style={{
                        justifyContent:
                            direction === 'horizontal'
                                ? 'center'
                                : 'flex-start',
                        paddingLeft:
                            direction === 'horizontal' ? 'unset' : '20px',
                    }}
                    onClick={() => context.setSelectedTab(index || 0)}
                >
                    {children}
                    <div
                        className={'web-tab-selected-shadow'}
                        style={{
                            ...shadowStyles(),
                            display: showNotSelectedShadow ? 'block' : 'none',
                        }}
                    />
                </div>
            )}
        </TabMenuContext.Consumer>
    );
};

export default Tab;
