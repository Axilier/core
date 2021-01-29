/** @format */
/// <reference types="react" />
import { TickboxProps } from '../Types';
import '../css/Tickbox.css';
declare const Tickbox: {
    ({ ticked, onChange, className, style }: TickboxProps): JSX.Element;
    defaultProps: {
        onChange: () => void;
    };
};
export default Tickbox;
