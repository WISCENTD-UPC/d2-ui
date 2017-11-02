import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import { createClassName } from '../component-helpers/utils';

const Icon = ({ color, disabled, style, selector, children }) => {
    const className = createClassName('d2-ui-icon', selector);

    return (
        <FontIcon
            className={className + ' material-icons'}
            style={style}
            color={disabled ? '#ddd' : color }
        >
            {children}
        </FontIcon>
    );
};

Icon.propTypes = {

    color: PropTypes.string,

    disabled: PropTypes.bool,

    /**
     * Override the inline-styles of the root element
     */
    style: PropTypes.object,

    /**
     * If set, adds a class to the element in the format d2-ui-tabs-selector
     */
    selector: PropTypes.string,
};

export default Icon;
