/** @format */

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
