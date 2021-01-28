/** @format */

import { createContext } from 'react';
import { TilesContextType } from './Types';

// eslint-disable-next-line import/prefer-default-export
export const TilesContext = createContext<TilesContextType>({
    selectedTile: 0,
    setSelectedTile: () => null,
});
