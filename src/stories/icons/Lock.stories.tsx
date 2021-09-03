/** @format */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Lock, useToggle } from '../../index';
import { LockProps } from '../../Types';

export default {
    title: 'Example/Icons/Lock',
    component: Lock,
} as Meta;

const Template: Story<LockProps> = args => {
    const [locked, toggleLock] = useToggle(true);
    return <Lock {...args} onClick={() => toggleLock()} locked={locked} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const Locked = Template.bind({});
Locked.args = {
    locked: true,
};

export const Colored = Template.bind({});
Colored.args = {
    iconColor: 'blue',
};

export const Styled = Template.bind({});
Styled.args = {
    style: {
        height: '100px',
    },
};
