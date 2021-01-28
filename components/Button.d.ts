/** @format */
/// <reference types="react" />
import { ButtonProps } from '../Types';
import '../css/Button.css';
declare const Button: {
    ({ label, type, variant, onClick, style }: ButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
        type: string;
        label: string;
        onClick: () => void;
    };
};
export default Button;
