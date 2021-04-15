/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Dropdown } from '../../components/Icons';
import { DropdownProps } from '../../Types';

export default {
    title: 'Example/Icons/Dropdown',
    component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = args => (
    <Dropdown
        {...args}
        style={{
            height: '100px',
            width: '100px',
        }}
    />
);

export const Basic = Template.bind({});
