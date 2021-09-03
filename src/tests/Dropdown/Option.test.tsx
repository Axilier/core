import React from 'react';
import { mount } from 'enzyme';
import { Option } from '../../index';

const onClick = jest.fn();
const option = mount(<Option onClick={onClick}>test</Option>);

describe('when the option is used in an application', () => {
    it('should render the contained option correctly', () => {
        expect(option).toMatchSnapshot();
    });
    describe('when `onClick` is defined, and the option is pressed', () => {
        beforeAll(() => option.simulate('click'));
        it('should run the onClick function', () => {
            expect(onClick).toHaveBeenCalled();
        });
    });
    describe('when `onClick` is not defined, and the option is pressed', () => {
        beforeAll(() => {
            option.setProps({ onClick: null });
            option.simulate('click');
        });
        it('should do nothing', () => {
            expect(true).toBeTruthy();
        });
    });
});
