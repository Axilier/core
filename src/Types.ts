/** @format */
import React, { CSSProperties, Dispatch, SetStateAction } from 'react';

export type ButtonProps = {
    label: string; // DOC the label/name for the button
    type?: 'primary' | 'secondary' | 'tertiary'; // DOC the three different types of button for different times (dark/light mode)
    variant?: 'contained' | 'text' | 'outlined'; // DOC reads as is
    onClick?: () => void; // DOC ran when the button is clicked
    style?: CSSProperties;
    className?: string;
    disabled?: boolean;
};

export type TickboxProps = {
    ticked: boolean; // DOC the tickbox's status, can be updated from the parent
    onChange?: () => void; // DOC ran when the status of the tickbox changes
    style?: CSSProperties;
    className?: string;
};

export type TileListProps = {
    children: { props: TileType } | Array<{ props: TileType }>;
};

export type TileType = {
    label: string;
    shown?: boolean;
    locked?: boolean;
    icon?: JSX.Element;
    children?: React.ReactNode;
    index?: number;
};

export type DropdownProps = {
    open: boolean;
    onChange?: () => void;
    style?: CSSProperties;
    className?: string;
};

export type LockProps = {
    locked: boolean;
    disabled?: boolean;
    onChange?: (state: boolean) => void;
    style?: CSSProperties;
} & IconProps;

export type TilesContextType = {
    selectedTile: number;
    setSelectedTile: Dispatch<SetStateAction<number>> | (() => void);
};

export type TextBoxProps = {
    label?: string; // DOC the label that is before the input, background does not extend to cover it
    size?: 'small' | 'large';
    disabled?: boolean;
    variant?: 'filled' | 'outlined'; // DOC the type of input that will be shown, filled has sharp corners, outlined has rounded corners
    prefixComponent?: JSX.Element; // DOC component usually an icon that comes before the input box
    suffixComponent?: JSX.Element; // DOC component usually an icon that comes after the input box
    units?: string;
    onChange?: (value: string) => void; // DOC ran when the text in the input box is changed
    maxLength?: number;
    required?: boolean;
    placeholder?: string;
    filter?: (value: string) => boolean; // DOC checks if the current string passes the filter, TRUE - PASS, FALSE - FAIL
    style?: CSSProperties;
    className?: string;
    value: string;
};

export type IconProps = {
    iconColor?: string;
} & BasicComponent;

export type BasicComponent = {
    style?: CSSProperties;
    className?: string;
};
