/** @format */
/// <reference types="react" />
import { TextBoxProps } from '../Types';
import '../css/TextBox.css';
declare const TextBox: {
    ({ label, prefixComponent, suffixComponent, filter, placeholder, size, variant, required, disabled, maxLength, units, onChange, className, style, value: newValue, type, inputStyle, outLineColor, height, }: TextBoxProps): JSX.Element;
    defaultProps: {
        units: string;
        disabled: boolean;
        label: string;
        size: string;
        variant: string;
        onChange: () => null;
        value: string;
    };
};
export default TextBox;
