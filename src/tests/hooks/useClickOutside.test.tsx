import React, { useRef } from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { useClickOutside } from '../../index';

// btn1 has hook attached
// region demo
const Demo = ({
    button1Callback,
    button2Callback,
    hookCallback,
    hookCallback2,
}: {
    button1Callback: () => void;
    button2Callback: () => void;
    hookCallback: () => void;
    hookCallback2: () => void;
}): JSX.Element => {
    const ref = useRef(null);
    const ref2 = useRef(null);
    useClickOutside(hookCallback, ref);
    useClickOutside(hookCallback2, [ref, ref2]);
    return (
        <div id={'container'}>
            <button
                ref={ref}
                type={'button'}
                id={'test1'}
                onClick={button1Callback}
            >
                test1
            </button>
            <button
                ref={ref2}
                type={'button'}
                id={'test2'}
                onClick={button2Callback}
            >
                test2
            </button>
        </div>
    );
};
// endregion

const removedEventListener = jest.spyOn(document, 'removeEventListener');

const btn1Callback = jest.fn();
const btn2Callback = jest.fn();
const hookCallback = jest.fn();
const hookCallback2 = jest.fn();

const wrapper = document.createElement('div');
wrapper.id = 'test-wrapper';
document.body.appendChild(wrapper);

const demoContainer = mount(
    <Demo
        button1Callback={btn1Callback}
        button2Callback={btn2Callback}
        hookCallback={hookCallback}
        hookCallback2={hookCallback2}
    />,
    { attachTo: wrapper },
);

describe('when the demo is used in an application', () => {
    it('should render the demo correctly', () => {
        expect(demoContainer).toMatchSnapshot();
    });
    describe('when I click the first button', () => {
        beforeAll(() =>
            demoContainer
                .find('#test1')
                .getDOMNode()
                .dispatchEvent(new MouseEvent('click', { bubbles: true })),
        );
        it('should run the callback passed as btn1Callback', () => {
            expect(btn1Callback).toHaveBeenCalled();
        });
        it('should not run the callback for hookCallback2', () => {
            expect(hookCallback2).not.toHaveBeenCalled();
        });
    });
    describe('when I click the second button', () => {
        beforeAll(() =>
            demoContainer
                .find('#test2')
                .getDOMNode()
                .dispatchEvent(new MouseEvent('click', { bubbles: true })),
        );
        it('should run the callback passed as btn2Callback', () => {
            expect(btn2Callback).toHaveBeenCalled();
        });
        it('should run the callback passed as hookCallback', () => {
            expect(hookCallback).toHaveBeenCalled();
        });
        it('should not run the callback for hookCallback2', () => {
            expect(hookCallback2).not.toHaveBeenCalled();
        });
    });
    describe('when I click the container', () => {
        beforeAll(() =>
            demoContainer
                .find('#container')
                .getDOMNode()
                .dispatchEvent(new MouseEvent('click', { bubbles: true })),
        );
        it('should trigger hook2 as it only triggers when both refs arent clicked', () => {
            expect(hookCallback2).toHaveBeenCalled();
        });
    });
    describe('when I unmount the component', () => {
        beforeAll(() => {
            act(() => {
                demoContainer.unmount();
                demoContainer.update();
            });
        });
        it('should remove the event handler', () => {
            expect(removedEventListener).toHaveBeenCalledTimes(2);
        });
    });
});
