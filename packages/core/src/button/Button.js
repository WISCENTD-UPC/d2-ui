import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from 'material-ui/Button';
import { createClassName } from '../component-helpers/utils';

<<<<<<< HEAD
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
=======
const Button = (props) => {
    const { selector, ...passThroughProps } = props;

    const className = createClassName('d2-ui-textfield', selector);

    return (<MuiButton {...passThroughProps} />);
};

Button.propTypes = {
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    selector: PropTypes.string,
};

Button.defaultProps = {
<<<<<<< HEAD
    raised: false,
    flat: false,
    fab: false,
    selector: undefined,
};
export default Button;
=======
    selector: undefined,
};
export default Button;
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
