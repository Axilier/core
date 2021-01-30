/** @format */
import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
export declare type ButtonProps = {
    label: string;
    type?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text' | 'outlined';
    onClick?: () => void;
    style?: CSSProperties;
    className?: string;
    disabled?: boolean;
};
export declare type TickboxProps = {
    ticked: boolean;
    onChange?: () => void;
    style?: CSSProperties;
    className?: string;
};
export declare type TileListProps = {
    children: {
        props: TileType;
    } | Array<{
        props: TileType;
    }>;
};
export declare type TileType = {
    label: string;
    shown?: boolean;
    locked?: boolean;
    icon?: JSX.Element;
    children?: React.ReactNode;
    index?: number;
};
export declare type DropdownProps = {
    open: boolean;
    onChange?: () => void;
    style?: CSSProperties;
    className?: string;
};
export declare type LockProps = {
    locked: boolean;
    disabled?: boolean;
    onChange?: (state: boolean) => void;
    style?: CSSProperties;
} & IconProps;
export declare type TilesContextType = {
    selectedTile: number;
    setSelectedTile: Dispatch<SetStateAction<number>> | (() => void);
};
export declare type TextBoxProps = {
    label?: string;
    size?: 'small' | 'large';
    disabled?: boolean;
    variant?: 'filled' | 'outlined';
    prefixComponent?: JSX.Element;
    suffixComponent?: JSX.Element;
    units?: string;
    onChange?: (value: string) => void;
    maxLength?: number;
    required?: boolean;
    placeholder?: string;
    filter?: (value: string) => boolean;
    style?: CSSProperties;
    className?: string;
    value: string;
};
export declare type IconProps = {
    iconColor?: string;
} & BasicComponent;
export declare type BasicComponent = {
    style?: CSSProperties;
    className?: string;
};
