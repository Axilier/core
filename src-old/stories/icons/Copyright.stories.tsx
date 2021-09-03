/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Cross } from '../../../src/components/icons';
import { IconProps } from '../../Types';

export default {
    title: 'Example/Icons/Copyright',
    component: Cross,
} as Meta;

const Template: Story<IconProps> = args => (
    <Cross {...args} iconColor={'red'} />
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
