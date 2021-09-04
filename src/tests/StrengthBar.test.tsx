import React from 'react';
import { mount } from 'enzyme';
import { StrengthBar } from '../index';

const strengthBar = mount(<StrengthBar currentStrength={0} />);

describe('when the strengthBar is used in an application', () => {
    it('should render the contained strengthBar correctly', () => {
        expect(strengthBar).toMatchSnapshot();
    });
    describe('when the `currentStrength` is 0', () => {
        it('should show all bars green', () => {
            expect(
                strengthBar.find('#strengthBar').childAt(0).props().style,
            ).toHaveProperty('backgroundColor', '#E6E6E6');
            expect(
                strengthBar.find('#strengthBar').childAt(1).props().style,
            ).toHaveProperty('backgroundColor', '#E6E6E6');
            expect(
                strengthBar.find('#strengthBar').childAt(2).props().style,
            ).toHaveProperty('backgroundColor', '#E6E6E6');
            expect(
                strengthBar.find('#strengthBar').childAt(3).props().style,
            ).toHaveProperty('backgroundColor', '#E6E6E6');
        });
    });
    describe('when the `currentStrength` is 1', () => {
        beforeAll(() => strengthBar.setProps({ currentStrength: 1 }));
        it('should have the first bars colour be red', () => {
            expect(
                strengthBar.find('#strengthBar').childAt(0).props().style,
            ).toHaveProperty('backgroundColor', '#E01414');
        });
    });
    describe('when the `currentStrength` is 2', () => {
        beforeAll(() => strengthBar.setProps({ currentStrength: 2 }));
        it('should show the first two bars orange', () => {
            expect(
                strengthBar.find('#strengthBar').childAt(0).props().style,
            ).toHaveProperty('backgroundColor', '#E07C14');
            expect(
                strengthBar.find('#strengthBar').childAt(1).props().style,
            ).toHaveProperty('backgroundColor', '#E07C14');
            expect(
                strengthBar.find('#strengthBar').childAt(2).props().style,
            ).toHaveProperty('backgroundColor', '#E6E6E6');
            expect(
                strengthBar.find('#strengthBar').childAt(3).props().style,
            ).toHaveProperty('backgroundColor', '#E6E6E6');
        });
    });
    describe('when the `currentStrength` is 3', () => {
        beforeAll(() => strengthBar.setProps({ currentStrength: 3 }));
        it('should show all bars green', () => {
            expect(
                strengthBar.find('#strengthBar').childAt(0).props().style,
            ).toHaveProperty('backgroundColor', '#E0A914');
            expect(
                strengthBar.find('#strengthBar').childAt(1).props().style,
            ).toHaveProperty('backgroundColor', '#E0A914');
            expect(
                strengthBar.find('#strengthBar').childAt(2).props().style,
            ).toHaveProperty('backgroundColor', '#E0A914');
            expect(
                strengthBar.find('#strengthBar').childAt(3).props().style,
            ).toHaveProperty('backgroundColor', '#E6E6E6');
        });
    });
    describe('when the `currentStrength` is 4', () => {
        beforeAll(() => strengthBar.setProps({ currentStrength: 4 }));
        it('should show all bars green', () => {
            expect(
                strengthBar.find('#strengthBar').childAt(0).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
            expect(
                strengthBar.find('#strengthBar').childAt(1).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
            expect(
                strengthBar.find('#strengthBar').childAt(2).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
            expect(
                strengthBar.find('#strengthBar').childAt(3).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
        });
    });
    describe('when the `currentStrength` is 5', () => {
        beforeAll(() => strengthBar.setProps({ currentStrength: 5 }));
        it('should show all bars green', () => {
            expect(
                strengthBar.find('#strengthBar').childAt(0).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
            expect(
                strengthBar.find('#strengthBar').childAt(1).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
            expect(
                strengthBar.find('#strengthBar').childAt(2).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
            expect(
                strengthBar.find('#strengthBar').childAt(3).props().style,
            ).toHaveProperty('backgroundColor', '#37B411');
        });
    });
});
