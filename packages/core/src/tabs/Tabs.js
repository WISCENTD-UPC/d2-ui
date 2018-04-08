import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiTabs, { MuiTab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

import { createClassName } from '../component-helpers/utils';

<<<<<<< HEAD
export const Tabs = ({ style, selector, children }) => {
=======
const style = {
    flexGrow: 1,
};


function TabContainer(props) {
    return (
        <Typography component={'div'} style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const Tabs = ({ style, selector, children }) => {
>>>>>>> Merge Temp components from component-with-v1
    const className = createClassName('d2-ui-tabs', selector);

    return (
        <MuiTabs
            className={className}
            style={style}
        >
            {children}
        </MuiTabs>
    );
};

class Tab extends Component {
    state = { value: 0 };

    handleChange = (event, value) => {
        this.setState({ value });
    }

    render = () => {
        const className = createClassName('d2-ui-tab', this.props.selector);
        return (
            <MuiTab
                className={className}
            />
        );
    };
}

Tabs.propTypes = {
    tabCount: PropTypes.number,
    selector: PropTypes.string,
};

Tabs.defaultProps = {
    tabCount: 0,
};

export default Tab;
export { Tabs, Tab };
