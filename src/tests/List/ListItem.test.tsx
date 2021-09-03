import React from 'react';
import { mount } from 'enzyme';
import { ListItem, Key } from '../../index';

const onClick = jest.fn();
const listItem = mount(
    <ListItem dropdown onClick={onClick}>
        test
    </ListItem>,
);
const cleanUp = () => listItem.setProps({ dropdown: true, onClick });

describe('when I render the List in an application', () => {
    it('should render correctly', () => {
        expect(listItem).toMatchSnapshot();
    });
    describe('when the `controls` are defined', () => {
        beforeAll(() =>
            listItem.setProps({
                controls: (
                    <>
                        <Key className={'controls'} />
                    </>
                ),
            }),
        );
        it('should render an extra fragment that is the contained controls', () => {
            expect(listItem.find('.controls').exists()).toBeTruthy();
        });
    });
    describe('when the listItem is not selected', () => {
        describe('when the listItem is being hovered over', () => {
            beforeAll(() => listItem.simulate('mouseenter'));
            it('should have a backgroundColor that is #F9F9F9', () => {
                expect(listItem.childAt(0).props().style).toHaveProperty(
                    'backgroundColor',
                    '#F4F4F4',
                );
            });
            afterAll(() => listItem.simulate('mouseleave'));
        });
        describe('when the listItem is not being hovered over', () => {
            it('should have a backgroundColor that is #F9F9F9', () => {
                expect(listItem.childAt(0).props().style).toHaveProperty(
                    'backgroundColor',
                    '#F9F9F9',
                );
            });
        });
    });
    describe('when the listItem is selected', () => {
        beforeAll(() => listItem.setProps({ selected: true }));
        it('should have a backgroundColor of #EDF3FD', () => {
            expect(listItem.childAt(0).props().style).toHaveProperty(
                'backgroundColor',
                '#EDF3FD',
            );
        });
        afterAll(cleanUp);
    });
    describe('when the `dropdown` prop is defined', () => {
        it('should render a dropdown arrow', () => {
            expect(listItem.find('.dropdown-test').exists()).toBeTruthy();
        });
        describe('when `dropdown` is set to true', () => {
            it('should render the dropdown arrow up', () => {
                expect(
                    listItem.find('.dropdown-test').props().style,
                ).toHaveProperty('transform', 'rotate(180deg)');
            });
        });
        describe('when `dropdown` is set to false', () => {
            beforeAll(() => listItem.setProps({ dropdown: false }));
            it('should render the dropdown arrow down', () => {
                expect(
                    listItem.find('.dropdown-test').props().style,
                ).toHaveProperty('transform', 'none');
            });
            afterAll(cleanUp);
        });
    });
    describe('when the `dropdown` prop is not defined', () => {
        beforeAll(() => listItem.setProps({ dropdown: undefined }));
        it('should not render the dropdown arrow', () => {
            expect(listItem.find('.dropdown-test').exists()).toBeFalsy();
        });
        afterAll(cleanUp);
    });
    describe('when the listItem is clicked', () => {
        describe('when `onClick` is defined', () => {
            beforeAll(() => listItem.simulate('click'));
            it('should run the provided callback', () => {
                expect(onClick).toHaveBeenCalled();
            });
        });
        describe('when `onClick` is not defined', () => {
            beforeAll(() => {
                listItem.setProps({ onClick: null });
                listItem.simulate('click');
            });
            it('should do nothing', () => {
                expect(true).toBeTruthy();
            });
        });
    });
    describe('when the `child` prop is true', () => {
        beforeAll(() => listItem.setProps({ child: true }));
        it('should render with paddingLeft of 40px', () => {
            expect(listItem.childAt(0).props().style).toHaveProperty(
                'paddingLeft',
                '40px',
            );
        });
        afterAll(cleanUp);
    });
    describe('when the `child` prop is false', () => {
        beforeAll(() => listItem.setProps({ child: false }));
        it('should render with paddingLeft of 30px', () => {
            expect(listItem.childAt(0).props().style).toHaveProperty(
                'paddingLeft',
                '30px',
            );
        });
        afterAll(cleanUp);
    });
});
