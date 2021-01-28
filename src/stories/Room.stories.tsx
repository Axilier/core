/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Room } from '../index';

export default {
    title: 'Example/Icons/Room',
    component: Room,
} as Meta;

const Template: Story = (args) => <Room {...args} />;

export const Basic = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
    style: {
        height: '200px',
    },
};
