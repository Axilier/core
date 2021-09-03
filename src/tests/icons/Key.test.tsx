/** @format */

import React from 'react';
import { shallow } from 'enzyme';
import { Key } from '../../index';

const key = shallow(<Key />);

it('should render correctly', () => {
    expect(key).toMatchSnapshot();
});
