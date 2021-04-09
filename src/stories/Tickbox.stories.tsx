/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Tickbox } from '../index';
import { TickboxProps } from '../Types';

export default {
    title: 'Example/Tickbox',
    component: Tickbox,
} as Meta;

const Template: Story<TickboxProps> = args => <Tickbox {...args} />;

export const Ticked = Template.bind({});
Ticked.args = {
    ticked: true,
    onChange: () => {},
};
