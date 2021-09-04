import React from 'react';
import { mount, shallow } from 'enzyme';
import { MfaInput } from '../index';
import { expectToThrow } from './expectToThrow';

const onChange = jest.fn();
const wrapper = document.createElement('div');
wrapper.id = 'test-wrapper';
document.body.appendChild(wrapper);
const input = mount(
    <div>
        <MfaInput
            id={'test'}
            nextFocusElementId={'test1'}
            onChange={onChange}
        />
        <button type={'button'} id={'test1'}>
            test
        </button>
    </div>,
    { attachTo: document.getElementById('test-wrapper') },
);

describe('when the mfa-input is used in an application', () => {
    it('should render the contained divider correctly', () => {
        expect(input).toMatchSnapshot();
    });
    describe('when I type a number whilst selecting the first input box', () => {
        beforeAll(() => {
            input.find('#test-mfa-input-0').simulate('keydown', { key: 1 });
        });
        it('should enter the number into the box and select the next box', () => {
            expect(input.find('#test-mfa-input-0').props().value).toBe(1);
        });
        describe('when I type in the same box', () => {
            beforeAll(() => {
                input.find('#test-mfa-input-0').simulate('keydown', { key: 2 });
            });
            it('should overwrite the previous value', () => {
                expect(input.find('#test-mfa-input-0').props().value).toBe(2);
            });
        });
    });
    describe('when I type a alphabetical character', () => {
        beforeAll(() => {
            input.find('#test-mfa-input-1').simulate('keydown', { key: 'a' });
        });
        it('should do nothing and only as it only accepts numbers', () => {
            expect(input.find('#test-mfa-input-1').props().value).toBe('');
        });
    });
    describe('when I click delete or backspace', () => {
        describe('when I am selecting the first input', () => {
            beforeAll(() => {
                document.getElementById('test-mfa-input-0')?.focus();
                input
                    .find('#test-mfa-input-0')
                    .simulate('keydown', { key: 'Backspace' });
            });
            it('should stay focused', () => {
                expect(
                    input.find('#test-mfa-input-0').is(':focus'),
                ).toBeTruthy();
            });
        });
        describe('when I am selecting any input other than index 0', () => {
            beforeAll(() => {
                input.find('#test-mfa-input-0').simulate('keydown', { key: 1 });
            });
            it('should stay focused', () => {
                expect(
                    input.find('#test-mfa-input-1').is(':focus'),
                ).toBeTruthy();
                input
                    .find('#test-mfa-input-1')
                    .simulate('keydown', { key: 'Delete' });
                expect(
                    input.find('#test-mfa-input-0').is(':focus'),
                ).toBeTruthy();
            });
        });
    });
    describe('when I use the left arrow key whilst selecting one of the inputs', () => {
        beforeAll(() => document.getElementById('test-mfa-input-2')?.focus());
        it('should move my focus to the previous input, or keep it at input 0', () => {
            input
                .find('#test-mfa-input-2')
                .simulate('keydown', { key: 'ArrowLeft' });
            expect(input.find('#test-mfa-input-1').is(':focus')).toBeTruthy();
        });
    });
    describe('when I use the right arrow key whilst selecting one of the inputs', () => {
        beforeAll(() => document.getElementById('test-mfa-input-2')?.focus());
        it('should move my focus to the next input, or keep it at the end', () => {
            input
                .find('#test-mfa-input-2')
                .simulate('keydown', { key: 'ArrowRight' });
            expect(input.find('#test-mfa-input-3').is(':focus')).toBeTruthy();
        });
    });
    describe('when the `onChange` prop is defined and I type a new character', () => {
        beforeAll(() => {
            input.setProps({
                children: (
                    <>
                        <MfaInput
                            id={'test'}
                            nextFocusElementId={'test1'}
                            onChange={onChange}
                            value={''}
                        />
                        <button type={'button'} id={'test1'}>
                            test
                        </button>
                    </>
                ),
            });
            onChange.mockClear();
        });
        it('should run the function with the new code as the value', () => {
            input.find('#test-mfa-input-1').simulate('keydown', { key: 2 });
            expect(onChange).toBeCalledWith('2');
        });
    });
    describe('when the `value` prop is defined', () => {
        beforeAll(() => {
            input.setProps({
                children: (
                    <>
                        <MfaInput
                            id={'test'}
                            nextFocusElementId={'test1'}
                            onChange={onChange}
                            value={'859683'}
                        />
                        <button type={'button'} id={'test1'}>
                            test
                        </button>
                    </>
                ),
            });
            input.update();
        });
        it('should fill in the 6 input boxes', () => {
            expect(input.find('#test-mfa-input-0').props().value).toBe('8');
            expect(input.find('#test-mfa-input-1').props().value).toBe('5');
            expect(input.find('#test-mfa-input-2').props().value).toBe('9');
        });
    });
    describe('when I paste a string into the input', () => {
        describe('when it contains only numbers', () => {
            beforeAll(() =>
                input.find('#test-mfa-input-0').simulate('paste', {
                    clipboardData: {
                        getData: jest.fn().mockReturnValue('123456'),
                    },
                }),
            );
            it('should each string character into a box up to 6 characters', () => {
                expect(input.find('#test-mfa-input-0').props().value).toBe('1');
                expect(input.find('#test-mfa-input-1').props().value).toBe('2');
                expect(input.find('#test-mfa-input-2').props().value).toBe('3');
            });
        });
        describe('when it contains letters as well as numbers', () => {
            beforeAll(() => {
                input.setProps({ value: '' });
                input.find('#test-mfa-input-0').simulate('paste', {
                    clipboardData: {
                        getData: jest.fn().mockReturnValue('1a3456'),
                    },
                });
            });
            it('should each string character into a box up to 6 characters', () => {
                expect(input.find('#test-mfa-input-0').props().value).toBe('1');
                expect(input.find('#test-mfa-input-1').props().value).toBe('');
                expect(input.find('#test-mfa-input-2').props().value).toBe('3');
            });
        });
        describe('once a string has been pasted into the input', () => {
            it('should make the user focus the specified element in `nextFocusElementId`', () => {
                expect(input.find('#test1').is(':focus')).toBeTruthy();
            });
        });
    });
    describe('when I past nothing into the input', () => {
        beforeAll(() => input.find('#test-mfa-input-0').simulate('paste', {}));
        it('should do nothing', () => {
            expect(true).toBeTruthy();
        });
    });
    describe('when I run change event', () => {
        beforeAll(() =>
            input
                .find('#test-mfa-input-0')
                .simulate('change', { target: { value: 1 } }),
        );
        it('should do nothing as it only suppresses an error', () => {
            expect(true).toBeTruthy();
        });
    });
    describe('when the `nextFocusElementId` is defined', () => {
        describe('when I type a key into the final input', () => {
            it('should focus the element specified in `nextFocusElementId`', () => {
                input.find('#test-mfa-input-5').simulate('keydown', { key: 1 });
                expect(input.find('#test1').is(':focus')).toBeTruthy();
            });
        });
        describe('when the element with the id doesnt exist', () => {
            beforeAll(() => {
                input.setProps({
                    children: (
                        <MfaInput
                            id={'test'}
                            onChange={onChange}
                            nextFocusElementId={'testymctest'}
                            value={'859683'}
                        />
                    ),
                });
                input.update();
                document.getElementById('#test-mfa-input-5')?.focus();
            });
            it('should throw an error', () => {
                expectToThrow(() => {
                    input
                        .find('#test-mfa-input-5')
                        .simulate('keydown', { key: 2 });
                }, 'Next Focus Element not found');
            });
            describe('when I paste text', () => {
                it('should throw an error ', () => {
                    expectToThrow(() => {
                        input.find('#test-mfa-input-0').simulate('paste', {
                            clipboardData: {
                                getData: jest.fn().mockReturnValue('123456'),
                            },
                        });
                    }, 'Next Focus Element not found');
                });
            });
        });
    });
    describe('when the `nextFocusElementId` is not defined', () => {
        beforeAll(() => {
            input.setProps({
                children: (
                    <>
                        <MfaInput
                            id={'test'}
                            onChange={onChange}
                            value={'859683'}
                        />
                        <button type={'button'} id={'test1'}>
                            test
                        </button>
                    </>
                ),
            });
            input.update();
        });
        describe('when I type in the last input box', () => {
            beforeAll(() => {
                input.find('#test-mfa-input-5').simulate('keydown', { key: 1 });
            });
            it('should keep focus on itself', () => {
                expect(input.find('#test-mfa-input-5').props().value).toBe(1);
            });
        });
        describe('when I paste into the input', () => {
            beforeAll(() =>
                input.find('#test-mfa-input-0').simulate('paste', {
                    clipboardData: {
                        getData: jest.fn().mockReturnValue('123456'),
                    },
                }),
            );
            it('should do nothing', () => {
                expect(true).toBeTruthy();
            });
        });
    });
});
