import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from 'material-ui/Button';
import { createClassName } from '../component-helpers/utils';

const Button = (props) => {
    const { selector, ...passThroughProps } = props;

    const className = createClassName('d2-ui-textfield', selector);

    return (<MuiButton {...passThroughProps} />);
};

Button.propTypes = {
    selector: PropTypes.string,
};

Button.defaultProps = {
    selector: undefined,
};
export default Button;
