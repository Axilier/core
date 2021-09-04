import React from 'react';
import { mount } from 'enzyme';
import { Menu } from '../index';

const menu = mount(
    <Menu open>
        <div>test menu</div>
    </Menu>,
);
describe('when the menu is used in an application', () => {
    it('should render the contained menu correctly', () => {
        expect(menu).toMatchSnapshot();
    });
    describe('when `open` is true', () => {
        it('should apply styles to show the menu', () => {
            expect(menu.childAt(0).props().style).toHaveProperty(
                'display',
                'flex',
            );
        });
    });
    describe('when `open` is false', () => {
        beforeAll(() => menu.setProps({ open: false }));
        it('should apply styles to not show the menu', () => {
            expect(menu.childAt(0).props().style).toHaveProperty(
                'display',
                'none',
            );
        });
    });
});
