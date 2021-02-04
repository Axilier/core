/** @format */
/// <reference types="react" />
import { TabMenuProps } from '../../Types';
import '../../css/TabMenu.css';
declare const TabMenu: {
    ({ children, direction, tabIndicatorColor, tabNotSelectedColor, tabSelectedColor, tabFontColor, onChange, }: TabMenuProps): JSX.Element;
    defaultProps: {
        direction: string;
    };
};
export default TabMenu;
