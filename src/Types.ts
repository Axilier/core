/** @format */
import React, { CSSProperties } from 'react';

export type ButtonProps = {
    label: string;
    type?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text' | 'outlined';
    onClick?: () => void;
};

export type TickboxProps = {
    ticked: boolean;
    onChange?: () => void;
};

export type TabListProps = {
    children: React.ReactNode;
};

export type TileType = {
    label: string;
    shown?: boolean;
    locked?: boolean;
    icon?: JSX.Element;
    children?: boolean;
};

export type DropdownProps = {
    open: boolean;
    onChange?: () => void;
};

export type LockProps = {
    locked: boolean;
    disabled: boolean;
    style?: CSSProperties;
};
