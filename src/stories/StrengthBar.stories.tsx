import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, Layout, StrengthBar } from '../index';
import { StrengthBarProps } from '../Types';

export default {
    title: 'Example/StrengthBar',
    component: StrengthBar,
} as Meta;

export const Basic: Story<StrengthBarProps> = () => {
    const [strength, setStrength] = useState(0);
    return (
        <div
            style={{
                width: '400px',
                height: '400px',
            }}
        >
            <Layout
                orientation={'row'}
                style={{
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                }}
            >
                <Button onClick={() => setStrength(strength - 1)}>
                    Decrease Strength
                </Button>
                <Button onClick={() => setStrength(strength + 1)}>
                    Increase Strength
                </Button>
            </Layout>
            <StrengthBar currentStrength={strength} />
        </div>
    );
};
