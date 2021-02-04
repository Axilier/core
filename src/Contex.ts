/** @format */

import { createContext } from 'react';
import { TabMenuContextType, TilesContextType } from './Types';

// eslint-disable-next-line import/prefer-default-export
export const TilesContext = createContext<TilesContextType>({
    selectedTile: 0,
    setSelectedTile: () => null,
});

export const TabMenuContext = createContext<TabMenuContextType>({
    selectedTab: 0,
    setSelectedTab: () => null,
});
