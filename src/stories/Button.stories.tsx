import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button, Google } from '../index';
import { ButtonProps } from '../Types';

export default {
    title: 'Example/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
    <>
        <Button style={{ margin: '10px' }} {...args}>
            {'Login'}
        </Button>
        <Button style={{ margin: '10px' }} {...args}>
            {'Reset 2 Factor Authentication'}
        </Button>
    </>
);

export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
};

export const Event = Template.bind({});
Event.args = {
    onClick: () => {
        console.debug('I was clicked!');
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'contained',
};

// export const Styled = Template.bind({});
// Styled.args = {
//     style: {
//         width: '320px',
//     },
// };

export const GoogleSignIn = Template.bind({});
GoogleSignIn.args = {
    variant: 'outlined',
    children: 'Sign Up with Google',
    btnStyles: {
        fontWeight: 'bold',
    },
    btnIcon: <Google />,
};
