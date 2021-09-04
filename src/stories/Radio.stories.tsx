import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Radio } from '../index';
import { RadioProps } from '../Types';

export default {
    title: 'Example/Radio',
    component: Radio,
} as Meta;

export const Basic: Story<RadioProps> = () => (
    <Radio options={['test1', 'test2']} onChange={console.log} />
);
