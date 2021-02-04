/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { AllFiles, Favourites, Recent, Tab, TabMenu } from '../index';
import { TabMenuProps } from '../Types';

export default {
    title: 'Example/TabMenu',
    component: TabMenu,
} as Meta;

export const Horizontal: Story<TabMenuProps> = (args) => (
    <div style={{ width: '500px' }}>
        <TabMenu {...args} tabFontColor={'black'}>
            <Tab>sex</Tab>
            <Tab>sex1</Tab>
            <Tab>sex1</Tab>
        </TabMenu>
    </div>
);

export const Vertical: Story<TabMenuProps> = (args) => (
    <div style={{ width: '200px' }}>
        <TabMenu {...args} direction={'vertical'}>
            <Tab>sex</Tab>
            <Tab>sex1</Tab>
            <Tab>sex1</Tab>
        </TabMenu>
    </div>
);

export const Colored: Story<TabMenuProps> = (args) => (
    <div
        style={{
            width: '200px',
            backgroundColor: '#1E4EE5',
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
                All Files
            </Tab>
            <Tab>
                <Recent />
                Recent
            </Tab>
            <Tab>
                <Favourites />
                Favourites
            </Tab>
        </TabMenu>
    </div>
);
