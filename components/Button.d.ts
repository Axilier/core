/** @format */
/// <reference types="react" />
import { ButtonProps } from '../Types';
import '../css/Button.css';
declare const Button: {
    ({ label, type, variant, onClick, style, className, disabled, }: ButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
        type: string;
        label: string;
        onClick: () => void;
        disabled: boolean;
    };
};
export default Button;
