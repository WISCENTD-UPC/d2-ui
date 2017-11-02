import React from 'react';
import { shallow } from 'enzyme';
import { Menu as MuiMenu, MenuItem as MuiMenuItem } from 'material-ui/Menu';
import { getStubContext } from '../../../config/inject-theme';
import Menu, { MenuItem } from '../Menu';

describe('Menu', () => {
    const renderWithProps = (props) => shallow(<Menu {...props} />, {
        context: getStubContext(),
    });

    it('should render a MUI Menu', () => {
        expect(renderWithProps({}).type()).toBe(MuiMenu);
    });

    it('should add a class name', () => {
        expect(renderWithProps({}).props().className).toMatch('d2-ui-menu');
    });

    it('should add a custom class name when a selector is passed', () => {
        expect(renderWithProps({ selector: 'my-menu' }).props().className).toMatch('d2-ui-menu-my-menu');
    });
});

describe('MenuItem', () => {
    const renderWithProps = (props) => shallow(<MenuItem {...props} />, {
        context: getStubContext(),
    });

    it('should render a MUI MenuItem', () => {
        expect(renderWithProps({}).type()).toBe(MuiMenuItem);
    });

    it('should add a class name', () => {
        expect(renderWithProps({}).props().className).toMatch('d2-ui-menuitem');
    });

    it('should add a custom class name when a selector is passed', () => {
        expect(renderWithProps({ selector: 'my-menuitem' }).props().className).toMatch('d2-ui-menuitem-my-menuitem');
    });
});
