/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextBoxProps } from '../Types';
import { Lock, Mail, Search, TextBox } from '../index';

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

export const Bare = Template.bind({});
Bare.args = {
    variant: 'bare',
    placeholder: 'Test placeholder',
    size: 'large',
    required: true,
    prefixComponent: <Search iconColor={'#8C8C8C'} />,
};

export const ColouredOutline = Template.bind({});
ColouredOutline.args = {
    variant: 'outlined',
    placeholder: 'Test placeholder',
    size: 'large',
    label: 'Password',
    required: true,
    outLineColor: 'red',
};

export const ChangedFont = Template.bind({});
ChangedFont.args = {
    variant: 'bare',
    placeholder: 'Test placeholder',
    size: 'large',
    required: true,
    prefixComponent: <Search iconColor={'#8C8C8C'} />,
    inputStyle: {
        fontWeight: 500,
        color: 'red',
    },
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

export const FilledSuffix = Template.bind({});
FilledSuffix.args = {
    variant: 'filled',
    maxLength: 3,
    units: 'Inch',
    label: 'Test:',
    suffixComponent: <Lock locked={false} />,
};

export const SuffixComponent = Template.bind({});
SuffixComponent.args = {
    variant: 'outlined',
    suffixComponent: <Mail />,
    placeholder: 'Test placeholder',
    size: 'large',
};
