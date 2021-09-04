import { mount } from 'enzyme';
import React from 'react';
import { Tab } from '../../index';

const onClick = jest.fn();
const tabRow = mount(<Tab orientation={'row'}>click me</Tab>);
const tabColumn = mount(<Tab orientation={'column'}>click me</Tab>);
const tabUnDef = mount(<Tab>click me</Tab>);

describe('when rendered in an application', () => {
    describe('when the `onClick` prop is not set', () => {
        beforeAll(() => tabRow.simulate('click'));
        it('should cause nothing to happen', () => {
            expect(true).toBeTruthy();
        });
    });
    describe('when the `onClick` prop is set', () => {
        beforeAll(() => {
            tabRow.setProps({ onClick });
            tabRow.simulate('click');
        });
        it('should register each click and run the provided callback', () => {
            expect(onClick).toHaveBeenCalled();
        });
        afterAll(() => tabRow.setProps({ onClick }));
    });
    describe('when the `showSelectedShadow` is set to true', () => {
        beforeAll(() => tabRow.setProps({ showNotSelectedShadow: true }));
        it('should make the shadow div have a display property of block', () => {
            expect(
                tabRow.childAt(0).childAt(0).childAt(1).props().style,
            ).toHaveProperty('display', 'block');
        });
        afterAll(() => tabRow.setProps({ showNotSelectedShadow: undefined }));
    });
    describe('when the `showSelectedShadow` is set to false', () => {
        beforeAll(() => tabRow.setProps({ showNotSelectedShadow: false }));
        it('should make the shadow div have a display property of none', () => {
            expect(
                tabRow.childAt(0).childAt(0).childAt(1).props().style,
            ).toHaveProperty('display', 'none');
        });
        afterAll(() => tabRow.setProps({ showNotSelectedShadow: undefined }));
    });
});
describe('when the `orientation` is row', () => {
    it('should render correctly', () => {
        expect(tabRow).toMatchSnapshot();
    });
    it('should have the expected styles', () => {
        expect(tabRow.childAt(0).props().style).toEqual({
            paddingLeft: 'unset',
        });
    });
    it('should have the tabHorizontal className', () => {
        expect(tabRow.childAt(0).props().className).toEqual(
            'tab tabHorizontal',
        );
    });
});
describe('when the `orientation` is column', () => {
    it('should render correctly', () => {
        expect(tabColumn).toMatchSnapshot();
    });
    it('should have the expected styles', () => {
        expect(tabColumn.childAt(0).props().style).toEqual({
            paddingLeft: '20px',
        });
    });
    it('should only have the tab className', () => {
        expect(tabColumn.childAt(0).props().className).toEqual('tab ');
    });
});
describe('when the `orientation` is not defined', () => {
    it('should render correctly', () => expect(tabUnDef).toMatchSnapshot());
});
