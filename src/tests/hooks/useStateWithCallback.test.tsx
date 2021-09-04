import React from 'react';
import { mount } from 'enzyme';
import { useStateWithCallback, useStepper } from '../../index';

// region demo
const Demo = ({ callback }: { callback: () => void }): JSX.Element => {
    const [state, setState] = useStateWithCallback(1, callback);
    return (
        <div id={'container'}>
            <div id={'state'}>{state}</div>
            <button
                type={'button'}
                id={'increment'}
                onClick={() => setState(state + 1)}
            >
                increment
            </button>
        </div>
    );
};
// endregion

const callback = jest.fn();
const demo = mount(<Demo callback={callback} />);

describe('when I render the demo in an application', () => {
    it('should render correctly', () => {
        expect(demo).toMatchSnapshot();
    });
    it('should set the initial state to 1', () => {
        expect(demo.find('#state').text()).toBe('1');
    });
    describe('when I click the button to change the state', () => {
        beforeAll(() => demo.find('#increment'));
        it('should call the callback', () => {
            expect(callback).toHaveBeenCalledWith(1);
        });
    });
});
