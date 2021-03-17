/** @format */
/// <reference types="react" />
import { ButtonProps } from '../Types';
import '../css/Button.css';
declare const Button: {
    ({ buttonType, label, type, variant, onClick, style, className, btnStyle, btnClassName, disabled, buttonColor, altButtonColor, buttonIcon, iconBackgroundColor, size, }: ButtonProps): JSX.Element;
    defaultProps: {
        buttonType: string;
        variant: string;
        type: string;
        label: string;
        onClick: () => null;
        disabled: boolean;
        size: string;
    };
};
export default Button;
