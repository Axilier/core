import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Divider from '../components/Divider';
import { ListProps } from '../Types';

export default {
    title: 'Example/Divider',
    component: Divider,
} as Meta;

export const Basic: Story<ListProps> = () => <Divider>OR</Divider>;
