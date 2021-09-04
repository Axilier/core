import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Layout, MfaInput } from '../index';
import { MfaInputProps } from '../Types';

export default {
    title: 'Example/MfaInput',
    component: MfaInput,
} as Meta;

export const Basic: Story<MfaInputProps> = () => (
    <Layout orientation={'column'} style={{ width: '500px' }}>
        <MfaInput
            onChange={console.log}
            nextFocusElementId={'mfa-input-button'}
        />
        <button type={'button'} id={'mfa-input-button'}>
            test
        </button>
    </Layout>
);

export const NextElemDoesntExist: Story<MfaInputProps> = () => (
    <Layout orientation={'column'} style={{ width: '500px' }}>
        <MfaInput
            onChange={console.log}
            nextFocusElementId={'sdagfsadrfgbdsgbf'}
        />
        <button type={'button'} id={'mfa-input-button'}>
            test
        </button>
    </Layout>
);

export const NextElemNotDefined: Story<MfaInputProps> = () => (
    <Layout orientation={'column'} style={{ width: '500px' }}>
        <MfaInput onChange={console.log} />
        <button type={'button'} id={'mfa-input-button'}>
            test
        </button>
    </Layout>
);
