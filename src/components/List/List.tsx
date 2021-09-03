import React, { cloneElement, useEffect, useMemo } from 'react';
import { ListProps } from '../../Types';
import ListItem from './ListItem';
import Layout from '../Layout';
import ListGroup from './ListGroup';

const List = ({
    children,
    width = '100%',
    listControls,
}: ListProps): JSX.Element => {
    const childrenArray = useMemo(
        () => (Array.isArray(children) ? children : [children]),
        [children],
    );

    const listGroupType = (
        <ListGroup
            listItem={
                <ListItem>
                    <></>
                </ListItem>
            }
        >
            <ListItem>
                <></>
            </ListItem>
        </ListGroup>
    ).type;

    useEffect(() => {
        childrenArray.forEach(child => {
            if (
                child.type !==
                    (
                        <ListItem>
                            <></>
                        </ListItem>
                    ).type &&
                child.type !== listGroupType
            ) {
                throw new Error('Children must be of type ListItem');
            }
        });
    }, [childrenArray, listGroupType]);

    const newChildren = useMemo(
        () =>
            childrenArray.map(child => {
                if (child.type === listGroupType) {
                    return cloneElement(child, {
                        ...child.props,
                        groupControls:
                            child.props.groupControls ||
                            listControls ||
                            undefined,
                    });
                }
                return cloneElement(child, {
                    ...child.props,
                    controls: child.props.controls || listControls || undefined,
                });
            }),
        [childrenArray, listControls, listGroupType],
    );

    return (
        <Layout style={{ width }} orientation={'column'}>
            {newChildren}
        </Layout>
    );
};

export default List;
