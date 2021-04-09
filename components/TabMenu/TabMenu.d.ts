/** @format */
/// <reference types="react" />
import { TabMenuProps } from '../../Types';
declare const TabMenu: {
    ({ children, direction, tabIndicatorColor, tabNotSelectedColor, tabSelectedColor, tabFontColor, onChange, showNotSelectedShadow, }: TabMenuProps): JSX.Element;
    defaultProps: {
        direction: string;
    };
};
export default TabMenu;
