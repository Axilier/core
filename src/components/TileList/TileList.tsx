/** @format */

// @flow
import * as React from 'react';
import { useState } from 'react';
import { TileListProps } from '../../Types';
import Tile from './Tile';
import { TilesContext } from '../../Contex';

const TileList = ({ children }: TileListProps): JSX.Element => {
    const [selectedTile, setSelectedTile] = useState(0);

    const newChildren = () => {
        if (!Array.isArray(children)) {
            return <Tile index={0} {...children.props} />;
        }
        return children.map(({ props }, index) => (
            <Tile
                index={index}
                key={`tile-index-${children.length}`}
                {...props}
            />
        ));
    };

    return (
        <TilesContext.Provider
            value={{
                selectedTile,
                setSelectedTile,
            }}
        >
            <div>{newChildren()}</div>
        </TilesContext.Provider>
    );
};

export default TileList;
