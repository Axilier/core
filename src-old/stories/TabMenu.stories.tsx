/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { AllFiles, Favourites, Recent, Tab, TabMenu } from '../index';
import { TabMenuProps } from '../Types';

export default {
    title: 'Example/TabMenu',
    component: TabMenu,
} as Meta;

export const Horizontal: Story<TabMenuProps> = (args: TabMenuProps) => (
    <div
        style={{
            width: '800px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <TabMenu {...args} tabFontColor={'black'} showNotSelectedShadow>
            <Tab>{'Test1'}</Tab>
            <Tab>{'Test2'}</Tab>
            <Tab>{'Test3'}</Tab>
        </TabMenu>
    </div>
);

export const Vertical: Story<TabMenuProps> = (args: TabMenuProps) => (
    <div
        style={{
            width: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px',
        }}
    >
        <TabMenu {...args} direction={'vertical'}>
            <Tab>{'Test1'}</Tab>
            <Tab>{'Test2'}</Tab>
            <Tab>{'Test3'}</Tab>
        </TabMenu>
    </div>
);

export const Colored: Story<TabMenuProps> = (args: TabMenuProps) => (
    <div
        style={{
            width: '300px',
            backgroundColor: '#1E4EE5',
        }}
    >
        <div
            style={{
                width: '200px',
                backgroundColor: '#1E4EE5',
                margin: 'auto',
            }}
        >
            <TabMenu
                {...args}
                direction={'vertical'}
                tabNotSelectedColor={'#1E4EE5'}
                tabSelectedColor={'#1B44C4'}
                tabIndicatorColor={'white'}
            >
                <Tab>
                    <AllFiles />
                    {'All Files'}
                </Tab>
                <Tab>
                    <Recent />
                    {'Recent'}
                </Tab>
                <Tab>
                    <Favourites />
                    {'Favourites'}
                </Tab>
            </TabMenu>
        </div>
    </div>
);
