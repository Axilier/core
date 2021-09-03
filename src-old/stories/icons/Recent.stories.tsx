/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Recent } from '../../../src/components/icons';
import { IconProps } from '../../Types';

export default {
    title: 'Example/Icons/Recent',
    component: Recent,
} as Meta;

const Template: Story<IconProps> = args => (
    <Recent {...args} iconColor={'red'} />
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
