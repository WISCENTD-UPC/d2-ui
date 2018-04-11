import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui-next/Button';
//import { createClassName } from '../component-helpers/utils';

export const ButtonTemp = ({ color, flat, fab, raised, selector, ...remainderOfProps }) => {
    const props = {
        variant: raised ? 'raised' : undefined || flat ? 'flat' : undefined || fab ? 'fab' : undefined,
        color: color === 'primary' ? color : undefined || color === 'accent' ? 'secondary' : 'default',
        // className: createClassName('d2-ui-button', selector),
        ...remainderOfProps,
    };

    return <Button {...props} />;
};

ButtonTemp.propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'accent']),
    flat: PropTypes.bool,
    fab: PropTypes.bool,
    raised: PropTypes.bool,
    selector: PropTypes.string,
};

ButtonTemp.defaultProps = {
    raised: false,
    flat: false,
    fab: false,
    selector: undefined,
};
export default ButtonTemp;