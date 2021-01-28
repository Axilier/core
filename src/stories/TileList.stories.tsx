/** @format */
import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { TileList } from '../index';
import { TileListProps } from '../Types';
import Tile from '../components/TileList/Tile';
import Room from '../components/Icons/Room';

export default {
    title: 'Example/TileList',
    component: TileList,
};

export const Single: Story<TileListProps> = (args) => (
    <div style={{ width: '500px' }}>
        <TileList {...args}>
            <Tile label={'tile1'} icon={<Room />} />
        </TileList>
    </div>
);

export const Multiple: Story<TileListProps> = (args) => (
    <div style={{ width: '500px' }}>
        <TileList {...args}>
            <Tile label={'tile1'} icon={<Room />} />
            <Tile label={'tile2'} icon={<Room />} />
            <Tile label={'tile3'} icon={<Room />} />
        </TileList>
    </div>
);
