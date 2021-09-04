import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Dropdown, Option } from '../components/Dropdown';
import { ListProps } from '../Types';

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
} as Meta;

export const Basic: Story<ListProps> = () => (
    <Dropdown label={'test dropdown'}>
        <Option>test</Option>
        <Option>test1</Option>
        <Option>test2</Option>
    </Dropdown>
);
