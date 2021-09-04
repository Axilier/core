import React from 'react';
import { mount } from 'enzyme';
import { useStepper } from '../../index';

// region demo
const Demo = (): JSX.Element => {
    const [state, increment, decrement, zero] = useStepper(1);
    return (
        <div id={'container'}>
            <div id={'state'}>{state}</div>
            <button type={'button'} id={'increment'} onClick={increment}>
                increment
            </button>
            <button type={'button'} id={'decrement'} onClick={decrement}>
                decrement
            </button>
            <button type={'button'} id={'zero'} onClick={zero}>
                zero
            </button>
        </div>
    );
};
// endregion

const demo = mount(<Demo />);

describe('when I render the demo in an application', () => {
    it('should render correctly', () => {
        expect(demo).toMatchSnapshot();
    });
    it('should initially have a state of zero', () => {
        expect(demo.find('#state').text()).toBe('1');
    });
    describe('when I click the increment button', () => {
        beforeAll(() => demo.find('#increment').simulate('click'));
        it('should increment the state by 1', () => {
            expect(demo.find('#state').text()).toBe('2');
        });
    });
    describe('when I click the decrement button', () => {
        beforeAll(() => demo.find('#decrement').simulate('click'));
        it('should decrement the state by 1', () => {
            expect(demo.find('#state').text()).toBe('1');
        });
    });
    describe('when I click the zero button', () => {
        beforeAll(() => demo.find('#zero').simulate('click'));
        it('should set the state to zero', () => {
            expect(demo.find('#state').text()).toBe('0');
        });
    });
});
