import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Key, Layout, Tab, Tabs } from '../index';
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

export const RealTest: Story<TabsProps> = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <Layout
            orientation={'column'}
            style={{
                width: '200px',
                backgroundColor: 'blue',
                height: '500px',
                padding: '10px',
            }}
        >
            <Tabs
                onChange={tab => {
                    setSelectedTab(tab);
                }}
                tabFontColor={'white'}
                orientation={'column'}
                tabNotSelectedColor={'#055eff'}
                tabSelectedColor={'#0452DE'}
                tabIndicatorColor={'white'}
            >
                <Tab>All files</Tab>
                <Tab>Connections</Tab>
                <Tab>Support</Tab>
            </Tabs>
        </Layout>
    );
};
