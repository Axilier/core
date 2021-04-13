/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Mail } from '../../components/Icons';
import { IconProps } from '../../Types';

export default {
    title: 'Example/Icons/Mail',
    component: Mail,
} as Meta;

const Template: Story<IconProps> = args => <Mail {...args} />;

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
