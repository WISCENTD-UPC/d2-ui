import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from 'material-ui/Button';
import { createClassName } from '../component-helpers/utils';

const Button = ({ color, flat, fab, raised, selector, ...remainderOfProps }) => {
    const props = {
        variant: raised ? 'raised' : undefined || flat ? 'flat' : undefined || fab ? 'fab' : undefined,
        color: color === 'primary' ? color : undefined || color === 'accent' ? 'secondary' : 'default',
        className: createClassName('d2-ui-button', selector),
        ...remainderOfProps,
    };

    return <MuiButton {...props} />;
};

Button.propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'accent']),
    flat: PropTypes.bool,
    fab: PropTypes.bool,
    raised: PropTypes.bool,
    selector: PropTypes.string,
};

Button.defaultProps = {
    raised: false,
    flat: false,
    fab: false,
    selector: undefined,
};
export default Button;