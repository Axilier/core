/** @format */

import { mount } from 'enzyme';
import React from 'react';
import { Layout } from '../index';

const layoutColumn = mount(<Layout orientation={'column'}>click me</Layout>);
const layoutRow = mount(<Layout orientation={'row'}>click me</Layout>);

describe('when the `orientation` prop is set to row', () => {
    it('should render correctly', () => {
        expect(layoutRow).toMatchSnapshot();
    });
    it('should have the expected styles', () => {
        expect(layoutRow.childAt(0).props().style).toHaveProperty(
            'flexDirection',
            'row',
        );
    });
});
describe('when the `orientation` prop is set to column', () => {
    it('should render correctly', () => {
        expect(layoutColumn).toMatchSnapshot();
    });

    it('should have the expected styles', () => {
        expect(layoutColumn.childAt(0).props().style).toHaveProperty(
            'flexDirection',
            'column',
        );
    });
});
describe('when the `orientation` prop is unset', () => {
    beforeAll(() => layoutColumn.setProps({ orientation: undefined }));
    it('should have the expected styles', () => {
        expect(layoutColumn.childAt(0).props().style).toHaveProperty(
            'flexDirection',
            'row',
        );
    });
    afterAll(() => layoutColumn.setProps({ orientation: 'column' }));
});
describe('when the `center` prop is true', () => {
    beforeAll(() => layoutColumn.setProps({ center: true }));
    it('it should have styles to center its child content', () => {
        expect(layoutColumn.childAt(0).props().style).toHaveProperty(
            'alignItems',
            'center',
        );
        expect(layoutColumn.childAt(0).props().style).toHaveProperty(
            'justifyContent',
            'center',
        );
    });
    afterAll(() => layoutColumn.setProps({ center: false }));
});
describe('when the `center` prop is not set', () => {
    it('it should have styles unset center styles', () => {
        expect(layoutColumn.childAt(0).props().style).not.toHaveProperty(
            'alignItems',
        );
        expect(layoutColumn.childAt(0).props().style).not.toHaveProperty(
            'justifyContent',
        );
    });
});
