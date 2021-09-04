import React, { CSSProperties } from 'react';

export interface LayoutProps {
    children: React.ReactNode;
    center?: boolean;
    orientation?: 'column' | 'row';
    style?: CSSProperties;
    elemRef?: React.Ref<HTMLDivElement>;
}

export interface TabProps {
    children: React.ReactNode;
    orientation?: 'row' | 'column';
    onClick?: () => void;
    showNotSelectedShadow?: boolean;
}

export interface TabsProps {
    children: JSX.Element | Array<JSX.Element>;
    orientation: 'row' | 'column';
    showNotSelectedShadow?: boolean;
    onChange?: (selectedTab: number) => void;
    tabIndicatorColor?: string;
    tabNotSelectedColor?: string;
    tabSelectedColor?: string;
    tabFontColor?: string;
    width?: string;
}

export type TextBoxProps = {
    label?: string; // DOC the label that is before the input, background does not extend to cover it
    size?: 'small' | 'large';
    maxLength?: number;
    disabled?: boolean;
    variant?: 'filled' | 'outlined' | 'bare'; // DOC the type of input that will be shown, filled has sharp corners, outlined has rounded corners
    height?: number;
    width?: number;
    outLineColor?: string;
    prefixComponent?: JSX.Element; // DOC component usually an icon that comes before the input box
    suffixComponent?: JSX.Element; // DOC component usually an icon that comes after the input box
    required?: boolean;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?(value: string): void;
    filter?(value: string): boolean;
    inputStyle?: CSSProperties;
    units?: string;
};

export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    btnType?: 'submit' | 'reset' | 'button';
    variant?: 'contained' | 'outlined' | 'text';
    btnColor?: 'primary' | 'secondary' | string;
    btnStyles?: CSSProperties;
    btnIcon?: JSX.Element;
    btnIconBackgroundColor?: string;
    disabled?: boolean;
    style?: CSSProperties;
    id?: string;
    className?: string;
}

export interface ListProps {
    children: JSX.Element | Array<JSX.Element>;
    width?: string;
    listControls?: JSX.Element;
}

export interface ListItemProps {
    children: React.ReactNode;
    controls?: JSX.Element;
    dropdown?: boolean;
    selected?: boolean;
    onClick?: () => void;
    child?: boolean;
}

export interface ListGroupProps {
    listItem: JSX.Element;
    children: JSX.Element | Array<JSX.Element>;
    groupControls?: JSX.Element;
}

export interface DividerProps {
    children: React.ReactNode;
    style?: CSSProperties;
}

export interface DropdownProps {
    label?: string;
    children: JSX.Element | Array<JSX.Element>;
    className?: string;
    required?: boolean;
    height?: string;
    style?: CSSProperties;
    onChange?: (value: number) => void;
}

export interface OptionProps {
    children: React.ReactChildren | React.ReactNode;
    onClick?: () => void;
}

export interface MfaInputProps {
    id?: string;
    value?: string;
    nextFocusElementId?: string;
    onChange: (code: string) => void;
}

export interface RadioProps {
    options: Array<string>;
    onChange: (value: string) => void;
}

export interface MenuProps {
    children: React.ReactChildren | React.ReactNode;
    open?: boolean;
    forwardedRef?: React.Ref<HTMLDivElement>;
}

export interface StrengthBarProps {
    currentStrength: number;
}

export type TickboxProps = {
    ticked: boolean; // DOC the tickbox's status, can be updated from the parent
    onChange?(): void; // DOC ran when the status of the tickbox changes
} & BasicComponent;

export type LockProps = {
    locked: boolean;
    disabled?: boolean;
    onClick?(): void;
    style?: CSSProperties;
} & IconProps;

export type IconProps = {
    iconColor?: string;
} & BasicComponent;

export type BasicComponent = {
    style?: CSSProperties;
    className?: string;
};

export type FixedTarget = {
    className?: string;
    nodeName?: string;
} & EventTarget;

export type FixedMouseEvent = {
    target: FixedTarget;
};
