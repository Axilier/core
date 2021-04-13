/** @format */
import { ButtonProps } from '../Types';
declare const Button: {
    ({ btnType, label, type, variant, onClick, style, className, btnStyle, btnClassName, disabled, buttonColor, altButtonColor, buttonIcon, iconBackgroundColor, size, }: ButtonProps): JSX.Element;
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
