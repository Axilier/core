/** @format */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Tab, Tabs } from '../../index';
import { expectToThrow } from '../expectToThrow';

const onChange = jest.fn();
const tabMenu = mount(
    <Tabs orientation={'row'}>
        <Tab>test1</Tab>
        <Tab>test2</Tab>
        <Tab>test3</Tab>
    </Tabs>,
);

describe('when the `onclick` prop is set', () => {
    beforeAll(() => tabMenu.setProps({ onChange }));
    it('should be called whenever a different tab is selected', () => {
        tabMenu.childAt(0).childAt(0).childAt(0).simulate('click');
        expect(onChange).toHaveBeenCalledWith(0);
        tabMenu.childAt(0).childAt(0).childAt(1).simulate('click');
        expect(onChange).toHaveBeenCalledWith(1);
    });
    afterAll(() => jest.clearAllMocks());
});
describe('when the `onclick` prop is not set', () => {
    beforeAll(() => tabMenu.setProps({ onChange: undefined }));
    it('should be called whenever a different tab is selected', () => {
        tabMenu.childAt(0).childAt(0).childAt(0).simulate('click');
        expect(onChange).not.toHaveBeenCalled();
        tabMenu.childAt(0).childAt(0).childAt(1).simulate('click');
        expect(onChange).not.toHaveBeenCalled();
    });
});
describe('when I provide children of a type not Tab', () => {
    it('should throw an error', () => {
        expectToThrow(
            () =>
                mount(
                    <Tabs orientation={'row'}>
                        <div />
                    </Tabs>,
                ),
            'children of TabMenu must be of type Tab',
        );
    });
});
describe('when I render the component', () => {
    it('should render as expected', () => {
        expect(tabMenu).toMatchSnapshot();
    });
    it('should have a selected indicator', () => {
        expect(tabMenu.childAt(0).childAt(0).childAt(3).is('#indicator')).toBe(
            true,
        );
    });
    it('should have an indicator with a width 1/3 of the tabMenu', async () => {
        expect(tabMenu.find('#indicator').props().style).toHaveProperty(
            'width',
            'calc( 100% / 3)',
        );
    });
    describe('when the `tabNotSelectedColor` prop is not set', () => {
        it('should set the non selected tabs background colour to transparent', () => {
            expect(tabMenu.childAt(0).props().style).toHaveProperty(
                'backgroundColor',
                'transparent',
            );
        });
    });
    describe('when the `tabNotSelectedColor` prop is set', () => {
        beforeAll(() => tabMenu.setProps({ tabNotSelectedColor: 'red' }));
        it('should set the non selected tabs background colour to the desired colour', () => {
            expect(tabMenu.childAt(0).props().style).toHaveProperty(
                'backgroundColor',
                'red',
            );
        });
        afterAll(() => tabMenu.setProps({ tabNotSelectedColor: undefined }));
    });
    describe('when the `tabIndicatorColor` prop is not set', () => {
        it('should set the indicator bar to transparent', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(3).props().style,
            ).toHaveProperty('backgroundColor', '#057AFF');
        });
    });
    describe('when the `tabIndicatorColor` prop is set', () => {
        beforeAll(() => tabMenu.setProps({ tabIndicatorColor: 'red' }));
        it('should set the indicator bar to the desired colour ', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(3).props().style,
            ).toHaveProperty('backgroundColor', 'red');
        });
        afterAll(() => tabMenu.setProps({ tabIndicatorColor: undefined }));
    });
    describe('when the `tabSelectedColor` prop is not set', () => {
        it('should set the indicator bar to transparent', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(4).props().style,
            ).toHaveProperty('backgroundColor', '#F4F4F4');
        });
    });
    describe('when the `tabSelectedColor` prop is set', () => {
        beforeAll(() => tabMenu.setProps({ tabSelectedColor: 'red' }));
        it('should set the indicator bar to transparent', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(4).props().style,
            ).toHaveProperty('backgroundColor', 'red');
        });
        afterAll(() => tabMenu.setProps({ tabSelectedColor: undefined }));
    });
    describe('when the orientation is row', () => {
        it('should set the width of the indicator to a calculation', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(3).props().style,
            ).toHaveProperty('width', 'calc( 100% / 3)');
        });
        it('should set the height of the indicator to 2px', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(3).props().style,
            ).toHaveProperty('height', '2px');
        });
    });
    describe('when the orientation is column', () => {
        beforeAll(() => tabMenu.setProps({ orientation: 'column' }));
        it('should set the width of the indicator to 2px', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(3).props().style,
            ).toHaveProperty('width', '2px');
        });
        it('should set the width of the indicator to 2px', () => {
            expect(
                tabMenu.childAt(0).childAt(0).childAt(3).props().style,
            ).toHaveProperty('height', 'calc( 100% / 3)');
        });
        afterAll(() => tabMenu.setProps({ orientation: 'row' }));
    });
});
describe('when I provide 3 children of type Tab', () => {
    it('should show the three Tab children', () => {
        expect(tabMenu.childAt(0).childAt(0).children()).toHaveLength(5);
    });
});
