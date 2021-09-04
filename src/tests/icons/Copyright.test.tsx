import React from 'react';
import { shallow } from 'enzyme';
import { Copyright } from '../../index';

const copyright = shallow(<Copyright />);

it('should render correctly', () => {
    expect(copyright).toMatchSnapshot();
});
