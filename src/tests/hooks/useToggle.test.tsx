import React from 'react';
import { mount } from 'enzyme';
import { useToggle } from '../../index';

// region demo
const Demo = (): JSX.Element => {
    const [state, toggleState] = useToggle(true);
    return (
        <div id={'container'}>
            <div id={'state'}>{state ? 1 : 0}</div>
            <button type={'button'} id={'toggle'} onClick={() => toggleState()}>
                toggle
            </button>
            <button
                type={'button'}
                id={'setFalse'}
                onClick={() => toggleState(false)}
            >
                setToFalse
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
    it('should have an initial state of true', () => {
        expect(demo.find('#state').text()).toBe('1');
    });
    describe('when I click the setFalse button', () => {
        beforeAll(() => demo.find('#setFalse').simulate('click'));
        it('should set the state to false', () => {
            expect(demo.find('#state').text()).toBe('0');
        });
    });
    describe('when I click the toggle button', () => {
        beforeAll(() => demo.find('#toggle').simulate('click'));
        it('should set toggle the state to true', () => {
            expect(demo.find('#state').text()).toBe('1');
        });
    });
});
