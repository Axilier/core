import React, { useRef, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, Menu, useClickOutside, useStateWithCallback } from '../index';
import { MenuProps } from '../Types';

export default {
    title: 'Example/Menu',
    component: Menu,
} as Meta;

export const Basic: Story<MenuProps> = () => {
    const [menu, setMenu] = useStateWithCallback(false, newState =>
        console.log(newState),
    );
    const passwordWindow = useRef<HTMLDivElement>(null);
    const passwordButton = useRef(null);
    useClickOutside(() => setMenu(false), [passwordWindow, passwordButton]);
    return (
        <>
            <Menu open={menu} forwardedRef={passwordWindow}>
                <div>this is a menu</div>
            </Menu>
            <button
                ref={passwordButton}
                type={'button'}
                onClick={() => setMenu(true)}
            >
                Open Menu
            </button>
        </>
    );
};
