import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { List, ListItem, ListGroup, Key } from '../index';
import { ListProps } from '../Types';

export default {
    title: 'Example/List',
    component: List,
} as Meta;

const Basic: Story<ListProps> = args => (
    <List {...args}>
        <ListItem>
            <Key iconColor={'black'} />
            test
        </ListItem>
        <ListItem dropdown>
            <Key iconColor={'black'} />
            test1
        </ListItem>
        <ListItem dropdown={false}>
            <Key iconColor={'black'} />
            test2
        </ListItem>
    </List>
);

export const Children: Story<ListProps> = args => {
    const [selectedItem, setSelectedItem] = useState('one');
    return (
        <List {...args} listControls={<Key />}>
            <ListItem
                key={'test'}
                onClick={() => setSelectedItem('one')}
                selected={selectedItem === 'one'}
            >
                <Key iconColor={'black'} />
                test
            </ListItem>
            <ListGroup
                key={'group'}
                listItem={
                    <ListItem
                        dropdown
                        onClick={() => setSelectedItem('two')}
                        selected={selectedItem === 'two'}
                    >
                        <Key iconColor={'black'} />
                        test1
                    </ListItem>
                }
            >
                <ListItem
                    key={'test1'}
                    dropdown
                    onClick={() => setSelectedItem('three')}
                    selected={selectedItem === 'three'}
                >
                    <Key iconColor={'black'} />
                    test1
                </ListItem>
                <ListItem
                    key={'test2'}
                    dropdown
                    onClick={() => setSelectedItem('four')}
                    selected={selectedItem === 'four'}
                >
                    <Key iconColor={'black'} />
                    test2
                </ListItem>
            </ListGroup>
        </List>
    );
};

export const ColouredOutline = Basic.bind({});
ColouredOutline.args = {};
