/** @format */
import React, { CSSProperties, Dispatch, ReactNode, SetStateAction } from 'react';
export declare type ButtonProps = {
    buttonType?: 'submit' | 'reset' | 'button';
    label: string;
    type?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text' | 'outlined';
    onClick?(): void;
    style?: CSSProperties;
    className?: string;
    btnStyle?: CSSProperties;
    btnClassName?: string;
    disabled?: boolean;
    buttonColor?: string;
    altButtonColor?: string;
    buttonIcon?: JSX.Element;
    iconBackgroundColor?: string;
    size?: 'small' | 'large' | string;
};
export declare type TickboxProps = {
    ticked: boolean;
    onChange?(): void;
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
export declare type LockProps = {
    locked: boolean;
    disabled?: boolean;
    onChange?(state: boolean): void;
    style?: CSSProperties;
} & IconProps;
export declare type TilesContextType = {
    selectedTile: number;
    setSelectedTile: Dispatch<SetStateAction<number>> | (() => void);
};
export declare type TextBoxProps = {
    label?: string;
    size?: 'small' | 'large' | string;
    disabled?: boolean;
    variant?: 'filled' | 'outlined' | 'bare';
    prefixComponent?: JSX.Element;
    suffixComponent?: JSX.Element;
    units?: string;
    onChange?(value: string): void;
    maxLength?: number;
    required?: boolean;
    placeholder?: string;
    filter?(value: string): boolean;
    style?: CSSProperties;
    className?: string;
    value?: string;
    type?: string;
    inputStyle?: CSSProperties;
    outLineColor?: string;
    height?: string;
};
export declare type IconProps = {
    iconColor?: string;
} & BasicComponent;
export declare type BasicComponent = {
    style?: CSSProperties;
    className?: string;
};
export interface DropdownProps extends BasicComponent {
    open?: boolean;
    onChange?(value: boolean): void;
}
declare type TabProps = {
    direction?: 'horizontal' | 'vertical';
    tabSelectedColor?: string;
    tabNotSelectedColor?: string;
};
export declare type TabType = {
    index?: number;
    children: ReactNode;
    showNotSelectedShadow?: boolean;
} & TabProps;
export declare type TabMenuProps = {
    children: {
        props: TabType;
    } | Array<{
        props: TabType;
    }>;
    tabIndicatorColor?: string;
    tabFontColor?: string;
    showNotSelectedShadow?: boolean;
    onChange(value: number): void;
} & TabProps;
export declare type TabMenuContextType = {
    selectedTab: number;
    setSelectedTab: Dispatch<SetStateAction<number>> | (() => void);
};
export {};
