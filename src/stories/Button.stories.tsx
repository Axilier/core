/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button, Google } from '../index';
import { ButtonProps } from '../Types';

export default {
    title: 'Example/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
    label: 'Sign Up',
    variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: 'Login',
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
};

export const Event = Template.bind({});
Event.args = {
    label: 'Sign Up',
    onClick: () => {
        console.debug('I was clicked!');
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Sign Up',
    variant: 'contained',
    disabled: true,
};

export const Styled = Template.bind({});
Styled.args = {
    style: {
        width: '320px',
    },
};

export const GoogleSignIn = Template.bind({});
GoogleSignIn.args = {
    variant: 'outlined',
    label: 'Sign Up with Google',
    style: {
        fontWeight: 'bold',
    },
    buttonIcon: <Google />,
    size: 'large',
};
