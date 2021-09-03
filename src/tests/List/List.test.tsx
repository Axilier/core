import React from 'react';
import { mount } from 'enzyme';
import { List, ListGroup, ListItem } from '../../index';
import { expectToThrow } from '../expectToThrow';

const list = mount(
    <List>
        <ListItem key={'test-1'}>test</ListItem>
        <ListGroup
            key={'test-2'}
            listItem={
                <ListItem>
                    <></>
                </ListItem>
            }
        >
            <ListItem key={'test-2-1'}>test1</ListItem>
            <ListItem key={'test-2-2'}>test2</ListItem>
        </ListGroup>
    </List>,
);
const cleanUp = () => list.setProps({});

describe('when I render the List in an application', () => {
    it('should render correctly', () => {
        expect(list).toMatchSnapshot();
    });
    describe('when I render a non ListItem component as a child', () => {
        it('should cause an Error that it must only have ListItems as children', () => {
            expectToThrow(
                () =>
                    mount(
                        <List>
                            <div />
                        </List>,
                    ),
                'Children must be of type ListItem',
            );
        });
    });
    describe('when `width` is not set', () => {
        it('should have a width of 100%', () => {
            expect(list.childAt(0).props().style).toHaveProperty(
                'width',
                '100%',
            );
        });
    });
    describe('when the `width` is set', () => {
        beforeAll(() => list.setProps({ width: '200px' }));
        it('should use that width as the lists width', () => {
            expect(list.childAt(0).props().style).toHaveProperty(
                'width',
                '200px',
            );
        });
        afterAll(cleanUp);
    });
});
