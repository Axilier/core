import React from 'react';
import { mount } from 'enzyme';
import { ListGroup, ListItem } from '../../index';
import { expectToThrow } from '../expectToThrow';

const onClick = jest.fn();
const listGroup = mount(
    <ListGroup
        listItem={
            <ListItem key={'item1'} onClick={onClick}>
                <></>
            </ListItem>
        }
    >
        <ListItem key={'item2'}>
            <></>
        </ListItem>
    </ListGroup>,
);
const cleanUp = () => listGroup.setProps({ dropdown: true });

describe('when I render the List in an application', () => {
    it('should render correctly', () => {
        expect(listGroup).toMatchSnapshot();
    });
    describe('when I provide `listItem` of a type not ListItem', () => {
        it('should throw an error', () => {
            expectToThrow(
                () =>
                    mount(
                        <ListGroup listItem={<div />}>
                            <ListItem>
                                <></>
                            </ListItem>
                        </ListGroup>,
                    ),
                'The listItem prop must be of type listItem',
            );
        });
    });
    describe('when I provide `children` of a type not ListItem', () => {
        it('should throw an error', () => {
            expectToThrow(
                () =>
                    mount(
                        <ListGroup
                            listItem={
                                <ListItem>
                                    <></>
                                </ListItem>
                            }
                        >
                            <div />
                            <div />
                        </ListGroup>,
                    ),
                'Children must be of type ListItem',
            );
        });
    });
    describe('when the groups `listItem` is clicked', () => {
        describe('when the `onClick` for the `listItem` is defined', () => {
            beforeAll(() => listGroup.childAt(0).simulate('click'));
            it('should open the listItems', () => {
                expect(listGroup.childAt(1).props().style).toHaveProperty(
                    'height',
                    '40px',
                );
            });
            it('should run the provided onClick function', () => {
                expect(onClick).toHaveBeenCalled();
            });
        });
        describe('when the `onClick` for the `listItem` is not defined', () => {
            beforeAll(() => {
                listGroup.setProps({
                    listItem: (
                        <ListItem key={'item1'}>
                            <></>
                        </ListItem>
                    ),
                });
                listGroup.childAt(0).simulate('click');
            });
            it('should do nothing', () => {
                expect(true).toBeTruthy();
            });
        });
    });
});
