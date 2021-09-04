import { mount } from 'enzyme';
import React from 'react';
import TextBox from '../components/TextBox';
import { Google } from '../components/icons';

const onChange = jest.fn();
const textBox = mount(<TextBox variant={'outlined'} />);

describe('when I render the TextBox in an app', () => {
    it('should render correctly', () => {
        expect(textBox).toMatchSnapshot();
    });
    describe('when the `label` prop is not set', () => {
        it('should not render a p element containing the label', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().className,
            ).not.toEqual('textBoxLabel');
        });
    });
    describe('when the `label` prop is set', () => {
        beforeAll(() => textBox.setProps({ label: 'test' }));
        it('should render a p element with the className textBoxLabel as the first element', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().className,
            ).toEqual('textBoxLabel');
        });
        afterAll(() => textBox.setProps({ label: undefined }));
    });
    describe('when the component is not `disabled`', () => {
        it('should have text color that #000000 either default or set by the user', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('color', '#000000');
        });
    });
    describe('when the component is `disabled`', () => {
        beforeAll(() => textBox.setProps({ disabled: true }));
        it('should have text color that #000000 either default or set by the user', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('color', '#8C8C8C');
        });
        afterAll(() => textBox.setProps({ disabled: false }));
    });
    describe('when the `variant` is outlined', () => {
        it('should have a borderRadius of 5px', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('borderRadius', '5px');
        });
        it('should have a set border', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('border', 'solid 2px #057EFF');
        });
    });
    describe('when the variant is filled', () => {
        beforeAll(() => textBox.setProps({ variant: 'filled' }));
        it('should have a borderRadius of 0', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('borderRadius', '0');
        });
        it('should have a set border', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('border', 'none');
        });
        afterAll(() => textBox.setProps({ variant: 'outlined' }));
    });
    describe('when the input is marked as `required`', () => {
        beforeAll(() => textBox.setProps({ required: true, label: 'test' }));
        it('should have a component that will render an *', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).childAt(1).props()
                    .className,
            ).toContain('requiredIcon');
        });
        afterAll(() => textBox.setProps({ required: false, label: undefined }));
    });
    describe('when the `size` is small', () => {
        beforeAll(() => textBox.setProps({ size: 'small' }));
        it('should have a set width and height', () => {
            expect(textBox.childAt(0).props().style).toHaveProperty(
                'width',
                '102px',
            );
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('height', '34px');
        });
        afterAll(() => textBox.setProps({ size: undefined }));
    });
    describe('when the `size` is large', () => {
        it('should have a set width and height', () => {
            expect(textBox.childAt(0).props().style).toHaveProperty(
                'width',
                '320px',
            );
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('height', '44px');
        });
    });
    describe('when the `height` or `width` is defined', () => {
        beforeAll(() =>
            textBox.setProps({
                size: 'small',
                height: 200,
                width: 300,
            }),
        );
        it('should overwrite the styles set by the size prop', () => {
            expect(textBox.childAt(0).props().style).toHaveProperty(
                'width',
                '300px',
            );
            expect(
                textBox.childAt(0).childAt(0).childAt(0).props().style,
            ).toHaveProperty('height', '200px');
        });
        afterAll(() =>
            textBox.setProps({
                size: undefined,
                height: undefined,
                width: undefined,
            }),
        );
    });
    describe('when the `prefixComponent` is defined', () => {
        beforeAll(() => textBox.setProps({ prefixComponent: <Google /> }));
        describe('when the `size` is also set to small', () => {
            beforeAll(() => textBox.setProps({ size: 'small' }));
            it('should set the prefixes height and width ', () => {
                expect(
                    textBox
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .props().style,
                ).toEqual({
                    marginLeft: '7px',
                });
            });
            afterAll(() => textBox.setProps({ size: 'large' }));
        });
        describe('when the `size` is also set to large', () => {
            beforeAll(() => textBox.setProps({ size: 'large' }));
            it('should set the prefixes height and width ', () => {
                expect(
                    textBox
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .props().style,
                ).toEqual({
                    marginLeft: '7px',
                });
            });
            afterAll(() => textBox.setProps({ size: undefined }));
        });
        afterAll(() => textBox.setProps({ prefixComponent: undefined }));
    });
    describe('when the `suffixComponent` is defined', () => {
        beforeAll(() => textBox.setProps({ suffixComponent: <Google /> }));
        it('should render an extra component which is the suffix component', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).childAt(0).children()
                    .length,
            ).toEqual(2);
            expect(
                textBox
                    .childAt(0)
                    .childAt(0)
                    .childAt(0)
                    .childAt(0)
                    .childAt(1)
                    .hasClass('suffix-comp'),
            ).toBeTruthy();
        });
        afterAll(() => textBox.setProps({ suffixComponent: undefined }));
    });
    describe('when the `units` is defined', () => {
        beforeAll(() => textBox.setProps({ units: 'Inches' }));
        it('should render an extra component which is the suffix component', () => {
            expect(
                textBox.childAt(0).childAt(0).childAt(0).childAt(0).children()
                    .length,
            ).toEqual(2);
            expect(
                textBox
                    .childAt(0)
                    .childAt(0)
                    .childAt(0)
                    .childAt(0)
                    .childAt(1)
                    .hasClass('unit-comp'),
            ).toBeTruthy();
        });
        describe('when the `variant` is not set', () => {
            it('should have a backgroundColor of transparent', () => {
                expect(
                    textBox
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(1)
                        .props().style,
                ).toHaveProperty('backgroundColor', 'transparent');
            });
        });
        describe('when the `variant` is set to filled', () => {
            beforeAll(() => textBox.setProps({ variant: 'filled' }));
            it('should have a backgroundColor of #F3F3F3', () => {
                expect(
                    textBox
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(0)
                        .childAt(1)
                        .props().style,
                ).toHaveProperty('backgroundColor', '#F3F3F3');
            });
            afterAll(() => textBox.setProps({ variant: undefined }));
        });
        afterAll(() => textBox.setProps({ units: undefined }));
    });
    describe('when the `onChange` prop is defined', () => {
        beforeAll(() => textBox.setProps({ onChange }));
        describe('when I type in the input', () => {
            it('should run the `onChange` function', () => {
                textBox
                    .find('input')
                    .simulate('change', { target: { value: 'Hello tester' } });
                expect(onChange).toHaveBeenCalledWith('Hello tester');
                onChange.mockClear();
            });
        });
        describe('when the filter is set for only numbers', () => {
            beforeAll(() =>
                textBox.setProps({
                    filter: (value: string) => /^\d+$/.test(value),
                }),
            );
            it('should only run onChange when the filter condition is met', () => {
                textBox
                    .find('input')
                    .simulate('change', { target: { value: 'test' } });
                expect(onChange).not.toHaveBeenCalled();
                textBox
                    .find('input')
                    .simulate('change', { target: { value: 10 } });
                expect(onChange).toHaveBeenCalledWith(10);
            });
            afterAll(() => textBox.setProps({ filter: undefined }));
        });
    });
    describe('when the `onChange` prop is not defined', () => {
        beforeAll(() => textBox.setProps({ onChange: null }));
        it('should do nothing when I type', () => {
            textBox
                .find('input')
                .simulate('change', { target: { value: 'Hello tester' } });
            expect(true).toBeTruthy();
        });
    });
});
