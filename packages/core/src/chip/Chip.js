import React from 'react';
import PropTypes from 'prop-types';
import MuiChip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
<<<<<<< HEAD

import SvgIcon from '../svg-icon/SvgIcon';
=======
import {SvgIcon} from 'd2-ui';
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
import { createClassName } from '../component-helpers/utils';

const chipSize = '30px';
const chipColor = '#333333';

const chipStyle = {
    margin: 3,
    height: chipSize,
    pointer: 'auto',
};

<<<<<<< HEAD
/** "labelStyle" prop removed from v1
 * 
=======
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
const labelStyle = {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '30px',
};
*/

const clickableStyle = { cursor: 'pointer' };
const disabledStyle = { cursor: 'auto', opacity: 0.5 };
const avatarIcons = { star: <SvgIcon icon={'Star'} /> };

<<<<<<< HEAD
/** "colors" prop removed from v1
 * 
const colors = {
=======
export const clickableStyle = { cursor: 'pointer' };
export const disabledStyle = { cursor: 'auto', opacity: 0.5 };
export const avatarIcons = { star: <SvgIcon icon={'star'} /> };

export const colors = {
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    default: {
        color: chipColor,
        backgroundColor: '#e0e0e0',
    },
    primary: {
        color: chipColor,
        backgroundColor: '#b1deda',
    },
};
<<<<<<< HEAD
*/
const avatarProps = {
    colorDefault: chipColor,                    
    // backgroundColor: 'rgba(0,0,0,0.08)',                 removed / changed(?) *TODO*
    // style: { height: chipSize, width: chipSize },        removed / changed(?) *TODO*
};

const Chip = ({ avatar, color = 'default', disabled, label, onClick, onRequestDelete, selector }) => {
    const style = {
        ...chipStyle,
        ...(typeof onClick === 'function' ? clickableStyle : {}),
        ...(disabled ? disabledStyle : {}),
    };

    const wrapperClassName = createClassName('d2-ui-chip-wrapper', selector);
    const wrapperStyle = { display: 'inline-block', verticalAlign: 'top' };

    const props = {
        avatar: avatar ? <Avatar classes={avatarProps}> {avatarIcons[avatar]} </Avatar> : undefined,
        label: label,
        className: createClassName('d2-ui-chip', selector),
        onClick: disabled ? undefined : onClick,
        onDelete: disabled ? undefined : onRequestDelete,       // name changed to onDelete in v1
        // ...colors[color],
        
    };

=======

export const avatarProps = {
    color: chipColor,
    backgroundColor: 'rgba(0,0,0,0.08)',
    style: { height: chipSize, width: chipSize },
};

const Chip = (props) => {
    const { color, disabled, selector, ...passThroughProps } = props;
    const className = createClassName('d2-ui-chip', selector);
    const style = {
        ...chipStyle, // d2 chipstyle
        ...(typeof onClick === 'function' ? clickableStyle : {}), // og ikkeno clickablestyle hvis det er funksjon (?)
        ...(disabled ? disabledStyle : {}), // og ikkeno disabled style, hvis den er disabled (?)
    };

    const wrapperClassName = createClassName('d2-ui-chip-wrapper', selector);
    const wrapperStyle = { display: 'inline-block', verticalAlign: 'top' };
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f

    return (
        
        <div className={wrapperClassName} style={wrapperStyle}>
<<<<<<< HEAD
            <MuiChip {...props} style={style} />
=======
            <MuiChip {...passThroughProps} style={style} />
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
        </div>
    );
};

export default Chip;

Chip.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    selector: PropTypes.string,
};

Chip.defaultProps = {
    color: 'default',
    disabled: false,
    selector: undefined,
<<<<<<< HEAD
};
=======
};
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
