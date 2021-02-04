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
    tabNotSelectedColor,
    tabSelectedColor,
}: TabType) => {
    const shadowStyles = () => {
        switch (direction) {
            case 'horizontal':
                return {
                    width: '200px',
                    height: '2px',
                    left: 2,
                };
            case 'vertical':
                return {
                    height: '40px',
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
            {(context) => (
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
                        style={shadowStyles()}
                    />
                </div>
            )}
        </TabMenuContext.Consumer>
    );
};

export default Tab;
