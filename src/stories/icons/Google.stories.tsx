/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Google } from '../../components/Icons';
import { BasicComponent } from '../../Types';

export default {
    title: 'Example/Icons/Google',
    component: Google,
} as Meta;

const Template: Story<BasicComponent> = args => <Google {...args} />;

export const Basic = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
    style: {
        height: '50px',
        width: '50px',
    },
};
