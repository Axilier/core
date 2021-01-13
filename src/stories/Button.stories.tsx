/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from '../index';
import { ButtonProps } from '../Types';

export default {
    title: 'Example/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
};
