import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash/fp';
import { Menu as MuiMenu, MenuItem as MuiMenuItem } from 'material-ui/Menu';
// import FontIcon from 'material-ui/FontIcon';
import Icon from '../icon/Icon';
import { createClassName } from '../component-helpers/utils';

const iconColor = '#777';
const iconDisabledColor = '#eee';

const styles = {
    list: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    leftIconPadding: {
        padding: '0 8px 0 56px',
    },
    icon: {
        top: 3,
        left: 16,
    },
};

const Menu = ({ style, selector, children }) => {
    const className = createClassName('d2-ui-menu', selector);

    return (
        <MuiMenu
            desktop={true}
            className={className}
            style={style}
            listStyle={styles.list}
        >
            {children}
        </MuiMenu>
    );
};

class MenuItem extends Component {
    static muiName = 'MenuItem';

    static propTypes = {
        /**
         * If set, adds a class to the element in the format d2-ui-tab-selector
         */
        selector: PropTypes.string,
    };
    render () {
        const className = createClassName('d2-ui-menuitem', this.props.selector);
        const props = { ...this.props };

        if (isString(props.leftIcon)) {
            props.leftIcon = (
                <Icon
                    disabled={props.disabled}
                    style={styles.icon}
                >
                    {props.leftIcon}
                </Icon>
            );
            props.innerDivStyle = styles.leftIconPadding;
        }

        return (
            <MuiMenuItem
                className={className}
                {...props}
            ></MuiMenuItem>
        );
    }
};


export default Menu;
export { Menu, MenuItem };
