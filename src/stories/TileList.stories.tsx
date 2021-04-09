/** @format */
import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Room, Tile, TileList } from '../index';
import { TileListProps } from '../Types';

export default {
    title: 'Example/TileList',
    component: TileList,
};

export const Single: Story<TileListProps> = args => (
    <div style={{ width: '500px' }}>
        <TileList {...args}>
            <Tile label={'tile1'} icon={<Room />} />
        </TileList>
    </div>
);

export const Multiple: Story<TileListProps> = args => (
    <div style={{ width: '500px' }}>
        <TileList {...args}>
            <Tile label={'tile1'} icon={<Room />}>
                <Tile label={'child Test'} />
            </Tile>
            <Tile label={'tile2'} icon={<Room />} />
            <Tile label={'tile3'} icon={<Room />} />
        </TileList>
    </div>
);
