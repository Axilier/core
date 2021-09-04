import React, { cloneElement, useEffect, useMemo } from 'react';
import { ListProps } from '../../Types';
import Layout from '../Layout';

const List = ({
    children,
    width = '100%',
    listControls,
}: ListProps): JSX.Element => {
    const childrenArray = useMemo(
        () => (Array.isArray(children) ? children : [children]),
        [children],
    );

    useEffect(() => {
        childrenArray.forEach(child => {
            if (
                child.type.name !== 'ListItem' &&
                child.type.name !== 'ListGroup'
            ) {
                throw new Error('Children must be of type ListItem');
            }
        });
    }, [childrenArray]);

    const newChildren = useMemo(
        () =>
            childrenArray.map(child => {
                if (child.type.name === 'ListGroup') {
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
        [childrenArray, listControls],
    );

    return (
        <Layout style={{ width }} orientation={'column'}>
            {newChildren}
        </Layout>
    );
};

export default List;
