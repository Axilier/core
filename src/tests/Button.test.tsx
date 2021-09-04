import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../index';
import { Google } from '../components/icons';

const onClick = jest.fn();
const buttonContainer = mount(<Button onClick={onClick}>{'click me'}</Button>);

describe('when the button is used in an application', () => {
    it('should render the contained button correctly', () => {
        expect(buttonContainer).toMatchSnapshot();
    });
    it('should contain a button element', () => {
        expect(buttonContainer.length).toBe(1);
        expect(buttonContainer.find('#button').type()).toEqual('button');
    });
    it('should have `click me` in the button', () => {
        expect(buttonContainer.find('#button').text()).toEqual('click me');
    });
    describe('when the `children` is less than 14 characters long', () => {
        it('should have a vertical padding of 5px', () => {
            expect(
                buttonContainer.find('#button').props().style,
            ).toHaveProperty('padding', '5px 20px');
        });
    });
    describe('when the `children` is more than 14 characters long', () => {
        beforeAll(() =>
            buttonContainer.setProps({
                children: 'This is a test for string larger than 14 char',
            }),
        );
        it('should have a vertical padding of 5px', () => {
            expect(
                buttonContainer.find('#button').props().style,
            ).toHaveProperty('padding', '10px 20px');
        });
        afterAll(() => buttonContainer.setProps({ children: 'click me' }));
    });
    describe('when the btnStyles prop is populated', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnStyles: { height: '200px' } });
        });
        it('should apply styles passed in the `btnStyles` prop directly to the button and override existing ones', () => {
            expect(
                buttonContainer.find('#button').props().style,
            ).toHaveProperty('height', '200px');
        });
        afterAll(() => {
            buttonContainer.setProps({ btnStyles: undefined });
        });
    });
    describe('when the btnIcon prop is populated', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnIcon: <Google /> });
        });
        it('should render the icon before the other children', () => {
            expect(
                buttonContainer
                    .childAt(0)
                    .childAt(0)
                    .childAt(0)
                    .childAt(0)
                    .equals(<Google />),
            ).toBe(true);
        });
        describe('when the `btnIconBackgroundColor` prop is defined', () => {
            beforeAll(() => {
                buttonContainer.setProps({ btnIconBackgroundColor: 'red' });
            });
            it('should render the icon with the correct direct styles', () => {
                expect(
                    buttonContainer.find('#button').childAt(0).props().style,
                ).toEqual({
                    backgroundColor: 'red',
                });
            });
            afterAll(() => {
                buttonContainer.setProps({ btnIconBackgroundColor: undefined });
            });
        });
        describe('when the `btnIconBackgroundColor` is not defined', () => {
            beforeAll(() => {
                buttonContainer.setProps({ btnIconBackgroundColor: null });
            });
            it('should show a white background for the icon', () => {
                expect(
                    buttonContainer.find('#button').childAt(0).props().style,
                ).toEqual({
                    backgroundColor: 'white',
                });
            });
        });
        afterAll(() => {
            buttonContainer.setProps({ btnIcon: undefined });
        });
    });
    describe('when the `btnIcon` prop is not populated', () => {
        it('should not render the icon', () => {
            expect(buttonContainer.find('#button').children()).toHaveLength(1);
        });
    });
    describe('when the `btnType` is set', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnType: 'submit' });
        });
        it('should be of type submit', () => {
            expect(buttonContainer.find('#button').props()).toHaveProperty(
                'type',
                'submit',
            );
        });
    });
    describe('when the `btnType` is unset', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnType: null });
        });
        it('should be of type submit', () => {
            expect(buttonContainer.find('#button').props()).toHaveProperty(
                'type',
                'button',
            );
        });
    });
    describe('when the button is disabled', () => {
        beforeAll(() => buttonContainer.setProps({ disabled: true }));
        it('should have a filter element on top of the main button', () => {
            expect(buttonContainer.find('#filter').exists()).toBeTruthy();
        });
        afterAll(() => buttonContainer.setProps({ disabled: false }));
    });
    describe('when the button is enabled', () => {
        it('should not have a filter element on top of the main button', () => {
            expect(buttonContainer.find('#filter').exists()).toBeFalsy();
        });
    });
    describe('when `styles` are provided', () => {
        beforeAll(() =>
            buttonContainer.setProps({ style: { margin: '20px' } }),
        );
        it('should pass those styles onto the container of the button', () => {
            expect(buttonContainer.props().style).toHaveProperty(
                'margin',
                '20px',
            );
        });
    });
});
describe('when the button is the contained variant', () => {
    beforeAll(() => {
        buttonContainer.setProps({ variant: 'contained' });
    });
    describe('when the button color is primary', () => {
        it('should have the correct styles for a default contained button', () => {
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: '#057AFF',
                color: 'white',
                border: 'solid 2px transparent',
                padding: '5px 20px',
            });
        });
        it('should have the correct styles for a default contained hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'white',
                color: '#057AFF',
                border: 'solid 2px #057AFF',
                padding: '5px 20px',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
    describe('when the button color is red', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnColor: 'red' });
        });
        it('should have the correct styles for a set coloured button', () => {
            expect(
                buttonContainer.find('#button').props().style,
            ).toHaveProperty('backgroundColor', 'red');
            expect(
                buttonContainer.find('#button').props().style,
            ).toHaveProperty('color', 'white');
        });
        it('should have the correct styles for a set coloured hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'white',
                color: 'red',
                border: 'solid 2px red',
                padding: '5px 20px',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
    describe('when the button color is secondary', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnColor: 'secondary' });
        });
        it('should have the correct styles for a secondary contained button', () => {
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'black',
                color: 'white',
                border: 'solid 2px transparent',

                padding: '5px 20px',
            });
        });
        afterAll(() => {
            buttonContainer.setProps({ btnColor: 'primary' });
        });
    });
});
describe('when the button is the outlined variant', () => {
    beforeAll(() => {
        buttonContainer.setProps({
            variant: 'outlined',
            btnColor: 'primary',
        });
    });
    describe('when the button color is primary', () => {
        it('should have the correct styles for a default button', () => {
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'white',
                color: '#057AFF',
                border: 'solid 2px #057AFF',

                padding: '5px 20px',
            });
        });
        it('should have the correct styles for a default hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: '#057AFF',
                color: 'white',
                border: 'solid 2px #057AFF',

                padding: '5px 20px',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
    describe('when the button color is red', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnColor: 'red' });
        });
        it('should have the correct styles for a set coloured button', () => {
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'white',
                color: 'red',
                border: 'solid 2px red',

                padding: '5px 20px',
            });
        });
        it('should have the correct styles for a set coloured hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'red',
                color: 'white',
                border: 'solid 2px red',

                padding: '5px 20px',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
});
describe('when the button is the text variant', () => {
    beforeAll(() => {
        buttonContainer.setProps({
            variant: 'text',
            btnColor: 'primary',
        });
    });
    describe('when the button color is primary', () => {
        it('should have the correct styles for a default button', () => {
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'transparent',
                color: '#057AFF',
                border: 'none',
                padding: 'unset',
            });
        });
        it('should have the correct styles for a default hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'transparent',
                color: '#057AFF',
                border: 'none',
                padding: 'unset',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
    describe('when the button color is red', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnColor: 'red' });
        });
        it('should have the correct styles for a default button', () => {
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'transparent',
                color: 'red',
                border: 'none',

                padding: 'unset',
            });
        });
        it('should have the correct styles for a default hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'transparent',
                color: 'red',
                border: 'none',
                padding: 'unset',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
});
describe('when the button`s variant is undefined', () => {
    beforeAll(() => {
        buttonContainer.setProps({ variant: null, btnColor: 'primary' });
    });
    describe('when the button color is primary', () => {
        it('should have the correct styles for a default button', () => {
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: '#057AFF',
                color: 'white',
                border: 'solid 2px transparent',
                padding: '5px 20px',
            });
        });
        it('should have the correct styles for a default hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'white',
                color: '#057AFF',
                border: 'solid 2px #057AFF',
                padding: '5px 20px',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
    describe('when the button color is red', () => {
        beforeAll(() => {
            buttonContainer.setProps({ btnColor: 'red' });
        });
        it('should have the correct styles for a set coloured button', () => {
            expect(
                buttonContainer.find('#button').props().style,
            ).toHaveProperty('backgroundColor', 'red');
            expect(
                buttonContainer.find('#button').props().style,
            ).toHaveProperty('color', 'white');
        });
        it('should have the correct styles for a set coloured hovered button', () => {
            buttonContainer.find('#button').simulate('mouseenter');
            expect(buttonContainer.find('#button').props().style).toEqual({
                backgroundColor: 'white',
                color: 'red',
                border: 'solid 2px red',
                padding: '5px 20px',
            });
            buttonContainer.find('#button').simulate('mouseleave');
        });
    });
});
