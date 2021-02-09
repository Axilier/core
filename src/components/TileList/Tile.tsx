/** @format */

// @flow
import * as React from 'react';
import { TileType } from '../../Types';
import { Dropdown, Lock } from '../Icons';
import { TilesContext } from '../../Contex';

const Tile = ({ label, icon, children, index }: TileType) => (
    <TilesContext.Consumer>
        {tilesInfo => (
            <>
                <div
                    role={'row'}
                    className={'core-tile-list-tile'}
                    style={{
                        backgroundColor:
                            tilesInfo.selectedTile === index
                                ? '#EDF3FD'
                                : '#F9F9F9',
                    }}
                    onClick={() => tilesInfo.setSelectedTile(index || 0)}
                >
                    <div className={'core-tile-left'}>
                        {children ? (
                            <Dropdown />
                        ) : (
                            <div style={{ width: '20px' }} />
                        )}
                        <div>{icon || null}</div>
                        <div>{label}</div>
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

export default Tile;
