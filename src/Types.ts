/** @format */
import React, {
    CSSProperties,
    Dispatch,
    ReactNode,
    SetStateAction,
} from 'react';

export type ButtonProps = {
    label: string; // DOC the label/name for the button
    type?: 'primary' | 'secondary' | 'tertiary'; // DOC the three different types of button for different times (dark/light mode)
    variant?: 'contained' | 'text' | 'outlined'; // DOC reads as is
    onClick?: () => void; // DOC ran when the button is clicked
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
    variant?: 'filled' | 'outlined' | 'bare'; // DOC the type of input that will be shown, filled has sharp corners, outlined has rounded corners
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
    value?: string;
    type?: string;
    inputStyle?: CSSProperties;
    outLineColor?: string;
};

export type IconProps = {
    iconColor?: string;
} & BasicComponent;

export type BasicComponent = {
    style?: CSSProperties;
    className?: string;
};

type TabProps = {
    direction?: 'horizontal' | 'vertical';
    tabSelectedColor?: string;
    tabNotSelectedColor?: string;
};

export type TabType = {
    index?: number;
    children: ReactNode; // TEXT
} & TabProps;

export type TabMenuProps = {
    children: { props: TabType } | Array<{ props: TabType }>;
    tabIndicatorColor?: string;
    tabFontColor?: string;
    onChange: (value: number) => void;
} & TabProps;

export type TabMenuContextType = {
    selectedTab: number;
    setSelectedTab: Dispatch<SetStateAction<number>> | (() => void);
};
