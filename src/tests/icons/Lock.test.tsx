import React from 'react';
import { mount } from 'enzyme';
import { Lock } from '../../index';

const onChange = jest.fn();
const lock = mount(<Lock className={'test-Lock'} />);

describe('when I render the component in an application', () => {
    it('should render correctly', () => {
        expect(lock).toMatchSnapshot();
    });
    describe('when the `locked` prop is not defined', () => {
        it('should default to the locked state', () => {
            expect(
                lock.find('.test-Lock').hostNodes().childAt(1).props().name,
            ).toBe('locked');
        });
    });
    describe('when I change the `locked` prop it should update the component', () => {
        beforeAll(() => {
            lock.setProps({ locked: false });
            lock.update();
        });
        it('should change the components name to unlocked', () => {
            expect(
                lock.find('.test-Lock').hostNodes().childAt(1).props().name,
            ).toBe('unlocked');
        });
    });
    describe('when the lock is `disabled`', () => {
        beforeAll(() => {
            lock.setProps({ disabled: true });
        });
        it('should render a disabled component', () => {
            expect(lock.find('.disable-slash').exists()).toBeTruthy();
        });
    });
});
