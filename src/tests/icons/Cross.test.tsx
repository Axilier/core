import React from 'react';
import { shallow } from 'enzyme';
import { Cross } from '../../index';

const crossTest = shallow(<Cross />);

it('should render correctly', () => {
    expect(crossTest).toMatchSnapshot();
});
