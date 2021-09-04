import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Layout, Tab, Tabs } from '../index';
import { TabsProps } from '../Types';

export default {
    title: 'Example/TabMenu',
    component: Tabs,
} as Meta;

export const Horizontal: Story<TabsProps> = (args: TabsProps) => (
    <Layout
        orientation={'column'}
        center
        style={{
            width: '500px',
        }}
    >
        <Tabs orientation={'row'} onChange={console.log}>
            <Tab>Test1</Tab>
            <Tab>Test2</Tab>
            <Tab>Test3</Tab>
        </Tabs>
    </Layout>
);

export const Vertical: Story<TabsProps> = (args: TabsProps) => (
    <Layout
        orientation={'column'}
        center
        style={{
            width: '100px',
        }}
    >
        <Tabs {...args} orientation={'column'}>
            <Tab>Test1</Tab>
            <Tab>Test2</Tab>
            <Tab>Test3</Tab>
        </Tabs>
    </Layout>
);

export const NonSelectedColoured = Vertical.bind({});
NonSelectedColoured.args = {
    tabNotSelectedColor: 'lightblue',
};
