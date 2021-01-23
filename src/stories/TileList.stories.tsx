/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { TabList } from '../index';
import { TabListProps } from '../Types';
import Tile from '../components/TileList/Tile';
import Room from '../components/Icons/Room';

export default {
    title: 'Example/TabList',
    component: TabList,
} as Meta;

const Template: Story<TabListProps> = (args) => (
    <div style={{ width: '500px' }}>
        <TabList {...args}>
            <Tile label={'tile'} icon={<Room />} />
            <Tile label={'tile'} icon={<Room />} />
        </TabList>
    </div>
);

export const Basic = Template.bind({});
// Basic.args = {
//     // children: <Tile label={'test'} />,
// };
