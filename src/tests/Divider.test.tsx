import React from 'react';
import { mount } from 'enzyme';
import Divider  from '../components/Divider';

const divider = mount(<Divider>test</Divider>);

describe('when the divider is used in an application', () => {
    it('should render the contained divider correctly', () => {
        expect(divider).toMatchSnapshot();
    });
});
