/** @format */

// @flow
import * as React from 'react';
import { TileType } from '../../Types';
import { Lock } from '../Icons';
import { TilesContext } from '../../Contex';

const Tile = ({ label, icon, children, index }: TileType) => {
    return (
        <TilesContext.Consumer>
            {(tilesInfo) => (
                <>
                    <div
                        role={'row'}
                        className={'tile-list-tile'}
                        style={{
                            backgroundColor:
                                tilesInfo.selectedTile === index
                                    ? '#EDF3FD'
                                    : '#F9F9F9',
                        }}
                        onClick={() => tilesInfo.setSelectedTile(index || 0)}
                    >
                        <div>
                            {icon || null}
                            {label}
                        </div>
                        <div>
                            <Lock disabled={false} locked={false} />
                        </div>
                    </div>
                    {children}
                </>
            )}
        </TilesContext.Consumer>
    );
};

export default Tile;
