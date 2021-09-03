import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Dropdown, Option } from '../../index';
import { expectToThrow } from '../expectToThrow';

const wrapper = document.createElement('div');
wrapper.id = 'test-wrapper';
document.body.appendChild(wrapper);
const onChange = jest.fn();
const dropdown = mount(
    <Dropdown label={'test'} onChange={onChange}>
        <Option>test1</Option>
        <Option>test2</Option>
    </Dropdown>,
    { attachTo: wrapper },
);

describe('when the dropdown is used in an application', () => {
    it('should render the contained dropdown correctly', () => {
        expect(dropdown).toMatchSnapshot();
    });
    describe('when I render the component with children that arent Options', () => {
        it('should throw an error', () => {
            expectToThrow(
                () =>
                    mount(
                        <Dropdown>
                            <div />
                        </Dropdown>,
                    ),
                'Children of Dropdown must be of type Option',
            );
        });
    });
    describe('when the mainBody of the dropdown is clicked', () => {
        beforeEach(() => dropdown.find('.mainBody').simulate('click'));
        it('should open the dropdown with the listed options', () => {
            expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                'visibility',
                'visible',
            );
        });
        it('should close the dropdown with the listed options', () => {
            expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                'visibility',
                'hidden',
            );
        });
    });
    describe('when the dropdown is open', () => {
        beforeAll(() => {
            dropdown.find('.mainBody').simulate('click');
        });
        it('should show the dropdown open', () => {
            expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                'visibility',
                'visible',
            );
        });
        describe('when the mainBody is clicked', () => {
            beforeAll(() => {
                act(() => {
                    document.getElementById('DropdownMainBody')?.dispatchEvent(
                        new MouseEvent('click', {
                            bubbles: true,
                        }),
                    );
                });
                dropdown.update();
            });
            it('should do nothing', () => {
                expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                    'visibility',
                    'hidden',
                );
            });
        });
        describe('when any region of the screen other than mainBody is clicked', () => {
            beforeAll(() => {
                act(() => {
                    document.dispatchEvent(
                        new MouseEvent('click', {
                            clientX: 10,
                            clientY: 10,
                            bubbles: true,
                        }),
                    );
                });
                dropdown.update();
            });
            it('should close the dropdown', () => {
                expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                    'visibility',
                    'hidden',
                );
            });
        });
        describe('when any other than enter key is pressed', () => {
            beforeAll(() =>
                dropdown.find('.mainBody').simulate('keydown', { key: 'a' }),
            );
            it('should do nothing', () => {
                expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                    'visibility',
                    'hidden',
                );
            });
        });
        describe('when the enter key is pressed', () => {
            beforeAll(() =>
                dropdown
                    .find('.mainBody')
                    .simulate('keydown', { key: 'Enter' }),
            );
            it('should toggle the status of the menu', () => {
                expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                    'visibility',
                    'visible',
                );
            });
        });
        describe('when one of the child Options is selected', () => {
            beforeEach(() =>
                dropdown.find('.openMenu').childAt(1).simulate('click'),
            );
            it('should close the menu', () => {
                expect(dropdown.find('.openMenu').props().style).toHaveProperty(
                    'visibility',
                    'hidden',
                );
                expect(dropdown.find('.mainBody').childAt(0).text()).toBe(
                    'test2',
                );
            });
            describe('when `onChange` is not defined', () => {
                beforeAll(() => dropdown.setProps({ onChange: null }));
                it('should do nothing', () => {
                    expect(true).toBeTruthy();
                });
            });
        });
    });
    describe('when the `required` prop is false', () => {
        it('shouldn`t render a * with the label', () => {
            expect(dropdown.find('.required').exists()).toBeFalsy();
        });
    });
    describe('when the `required` prop is true', () => {
        beforeAll(() => dropdown.setProps({ required: true }));
        it('should render a * with the label', () => {
            expect(dropdown.find('.required').exists()).toBeTruthy();
        });
    });
    describe('when the `label` is not defined', () => {
        beforeAll(() => dropdown.setProps({ label: undefined }));
        it('should not render the label', () => {
            expect(dropdown.find('.label').exists()).toBeFalsy();
        });
    });
});
