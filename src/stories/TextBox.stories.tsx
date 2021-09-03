/** @format */

import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextBoxProps } from '../Types';
import TextBox from '../components/TextBox';
import { Lock, Key } from '../components/icons';

export default {
    title: 'Example/TextBox',
    component: TextBox,
} as Meta;

const Template: Story<TextBoxProps> = args => <TextBox {...args} />;

export const Filled = Template.bind({});
Filled.args = {
    variant: 'filled',
    maxLength: 3,
    label: 'Test',
    units: 'Inches',
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
    prefixComponent: <Key iconColor={'#8C8C8C'} />,
};

export const BareCentered: Story<TextBoxProps> = (args: TextBoxProps) => (
    <div
        style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            boxShadow: '0 3px 6px #00000029',
            height: '70px',
            padding: '0 65px',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
    >
        <TextBox
            label={'test'}
            {...args}
            variant={'bare'}
            placeholder={'Test placeholder'}
            size={'large'}
            prefixComponent={<Key iconColor={'#8C8C8C'} />}
            inputStyle={{
                fontWeight: 500,
                color: 'red',
            }}
        />
    </div>
);

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
    prefixComponent: <Key iconColor={'#8C8C8C'} />,
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
    filter: value => /^[0-9]*$/.test(value),
};

export const PrefixComponent = Template.bind({});
PrefixComponent.args = {
    variant: 'outlined',
    prefixComponent: <Key />,
    placeholder: 'Test placeholder',
    size: 'large',
};

export const FilledSuffix = Template.bind({});
FilledSuffix.args = {
    variant: 'filled',
    maxLength: 3,
    label: 'Test:',
    suffixComponent: <Lock locked={false} />,
};

export const SuffixComponent = Template.bind({});
SuffixComponent.args = {
    variant: 'outlined',
    suffixComponent: <Key />,
    placeholder: 'Test placeholder',
    size: 'large',
};

export const SizeSet = Template.bind({});
SizeSet.args = {
    size: 'small',
    width: 200,
    variant: 'outlined',
    placeholder: 'Test placeholder',
    label: 'Password',
    prefixComponent: <Key />,
    required: true,
};
