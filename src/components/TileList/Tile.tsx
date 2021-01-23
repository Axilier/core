/** @format */

// @flow
import * as React from 'react';
import { useState } from 'react';
import { TileType } from '../../Types';
import { Lock } from '../Icons';

const Tile = ({ label, icon }: TileType) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={'tile-list-tile'}
            style={{
                backgroundColor: hovered ? 'black' : '#F9F9F9',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div>
                {icon || null}
                {label}
            </div>
            <div>
                <Lock disabled={false} locked={false} />
            </div>
        </div>
    );
};

export default Tile;
