/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Key } from '../../index';
import { IconProps } from '../../Types';

export default {
    title: 'Example/Icons/Key',
    component: Key,
} as Meta;

const Template: Story<IconProps> = args => <Key {...args} />;

export const Basic = Template.bind({});

export const Colored = Template.bind({});
Colored.args = {
    iconColor: 'red',
};

export const Styled = Template.bind({});
Styled.args = {
    style: {
        height: '50px',
    },
};
