import React, { useState } from 'react';
import { ListItemProps } from '../../Types';
import styles from '../../css/List.module.css';
import Layout from '../Layout';

const ListItem = ({
    child = false,
    children,
    controls,
    dropdown,
    selected,
    onClick,
}: ListItemProps): JSX.Element => {
    const [hovered, setHovered] = useState(false);

    return (
        <Layout
            onClick={() => {
                if (onClick) onClick();
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            orientation={'row'}
            style={{
                paddingLeft: child ? '40px' : '30px',
                backgroundColor: selected
                    ? '#EDF3FD'
                    : hovered
                    ? '#F4F4F4'
                    : '#F9F9F9',
            }}
            className={styles.listItem}
        >
            <div className={styles.listItemChildren}>{children}</div>
            <div className={styles.endFragment}>
                {controls ? <> {controls} </> : null}
                {dropdown !== undefined ? (
                    <svg
                        className={'dropdown-test'}
                        xmlns={'http://www.w3.org/2000/svg'}
                        width={'16'}
                        height={'16'}
                        fill={'black'}
                        viewBox={'0 0 16 16'}
                        style={{
                            transform: dropdown ? 'rotate(180deg)' : 'none',
                        }}
                    >
                        <path
                            d={
                                'M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z'
                            }
                        />
                    </svg>
                ) : (
                    <div style={{ height: '16px', width: '16px' }} />
                )}
            </div>
        </Layout>
    );
};

export default ListItem;
