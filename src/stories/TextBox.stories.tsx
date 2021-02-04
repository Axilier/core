/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextBoxProps } from '../Types';
import { Mail, TextBox } from '../index';

export default {
    title: 'Example/TextBox',
    component: TextBox,
} as Meta;

const Template: Story<TextBoxProps> = (args) => <TextBox {...args} />;

export const Filled = Template.bind({});
Filled.args = {
    variant: 'filled',
    maxLength: 3,
    units: 'Inch',
    label: 'Test',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    placeholder: 'Test placeholder',
    size: 'large',
    label: 'Password',
    required: true,
};

export const NumbersOnly = Template.bind({});
NumbersOnly.args = {
    variant: 'outlined',
    placeholder: 'Test placeholder',
    size: 'large',
    filter: (value) => {
        return !/^[a-zA-Z]+$/.test(value);
    },
};

export const PrefixComponent = Template.bind({});
PrefixComponent.args = {
    variant: 'outlined',
    prefixComponent: <Mail />,
    placeholder: 'Test placeholder',
    size: 'large',
};

export const SuffixComponent = Template.bind({});
SuffixComponent.args = {
    variant: 'outlined',
    suffixComponent: <Mail />,
    placeholder: 'Test placeholder',
    size: 'large',
};
