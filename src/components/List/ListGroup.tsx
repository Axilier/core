import React, { cloneElement, useEffect, useMemo, useState } from 'react';
import { ListGroupProps } from '../../Types';
import ListItem from './ListItem';
import List from './List';
import styles from '../../css/List.module.css';

const ListGroup = ({
    listItem,
    children,
    groupControls,
}: ListGroupProps): JSX.Element => {
    const [groupOpen, setGroupOpen] = useState(false);
    const childrenArray = useMemo(
        () => (Array.isArray(children) ? children : [children]),
        [children],
    );
    useEffect(() => {
        if (
            listItem.type !==
            (
                <ListItem>
                    <></>
                </ListItem>
            ).type
        ) {
            throw new Error('The listItem prop must be of type listItem');
        }
    }, [listItem]);
    useEffect(() => {
        childrenArray.forEach(child => {
            if (
                child.type !==
                (
                    <ListItem>
                        <></>
                    </ListItem>
                ).type
            ) {
                throw new Error('Children must be of type ListItem');
            }
        });
    }, [childrenArray]);

    const items = useMemo(
        () =>
            childrenArray.map(child =>
                cloneElement(child, {
                    child: true,
                    dropdown: undefined,
                    controls: child.props.controls || groupControls,
                }),
            ),
        [childrenArray, groupControls],
    );

    return (
        <>
            {cloneElement(listItem, {
                ...listItem.props,
                onClick: () => {
                    setGroupOpen(!groupOpen);
                    if (listItem.props.onClick) listItem.props.onClick();
                },
                controls: groupControls,
                dropdown: groupOpen,
            })}
            <div
                className={styles.listGroup}
                style={{
                    height: groupOpen ? `${items.length * 40}px` : '0px',
                }}
            >
                <List>{items}</List>
            </div>
        </>
    );
};

export default ListGroup;
