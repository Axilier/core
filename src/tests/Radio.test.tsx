import React from 'react';
import { mount } from 'enzyme';
import { Radio } from '../index';

const onChange = jest.fn();
const radio = mount(<Radio options={['Test1', 'Test2']} onChange={onChange} />);

describe('when the radio is used in an application', () => {
    it('should render the contained radio correctly', () => {
        expect(radio).toMatchSnapshot();
    });
    describe('when I click the non selected button', () => {
        beforeAll(() =>
            radio
                .find('#Test2')
                .simulate('change', { target: { value: 'Test2' } }),
        );
        it('should change the visibly selected radio button', () => {
            expect(onChange).toHaveBeenCalledWith('Test2');
        });
    });
});
