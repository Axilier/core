/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Copyright } from '../../components/Icons';
import { IconProps } from '../../Types';

export default {
    title: 'Example/Icons/Copyright',
    component: Copyright,
} as Meta;

const Template: Story<IconProps> = args => (
    <Copyright {...args} iconColor={'red'} />
);

export const Basic = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
    iconColor: 'red',
    style: {
        height: '50px',
        width: '50px',
    },
};
