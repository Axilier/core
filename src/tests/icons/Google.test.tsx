import React from 'react';
import { shallow } from 'enzyme';
import { Google } from '../../index';

const google = shallow(<Google />);

it('should render correctly', () => {
    expect(google).toMatchSnapshot();
});
