import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui-next/Chip';
import Avatar from 'material-ui-next/Avatar';

import SvgIconTemp from './SvgIconTemp';
//import { createClassName } from '../component-helpers/utils';

const chipSize = '30px';
const chipColor = '#333333';

const chipStyle = {
    margin: 3,
    height: chipSize,
    pointer: 'auto',
};

/** "labelStyle" prop removed from v1
 * 
const labelStyle = {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '30px',
};
*/

const clickableStyle = { cursor: 'pointer' };
const disabledStyle = { cursor: 'auto', opacity: 0.5 };
const avatarIcons = { star: <SvgIconTemp icon={'Star'} /> };

/** "colors" prop removed from v1
 * 
const colors = {
    default: {
        color: chipColor,
        backgroundColor: '#e0e0e0',
    },
    primary: {
        color: chipColor,
        backgroundColor: '#b1deda',
    },
};
*/
const avatarProps = {
    colorDefault: chipColor,                    
    // backgroundColor: 'rgba(0,0,0,0.08)',                 removed / changed(?) *TODO*
    // style: { height: chipSize, width: chipSize },        removed / changed(?) *TODO*
};

export const ChipTemp = ({ avatar, color = 'default', disabled, label, onClick, onRequestDelete, selector }) => {
    const style = {
        ...chipStyle,
        ...(typeof onClick === 'function' ? clickableStyle : {}),
        ...(disabled ? disabledStyle : {}),
    };

    // const wrapperClassName = createClassName('d2-ui-chip-wrapper', selector);
    const wrapperStyle = { display: 'inline-block', verticalAlign: 'top' };

    const props = {
        avatar: avatar ? <Avatar classes={avatarProps}> {avatarIcons[avatar]} </Avatar> : undefined,
        label: label,
        // className: createClassName('d2-ui-chip', selector),
        onClick: disabled ? undefined : onClick,
        onDelete: disabled ? undefined : onRequestDelete,       // name changed to onDelete in v1
        // ...colors[color],
        
    };


    return (
        
       // <div className={wrapperClassName} style={wrapperStyle}>
        <div style={wrapperStyle}>
            <Chip {...props} style={style} />
        </div>
    );
};

export default ChipTemp;

ChipTemp.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    selector: PropTypes.string,
};

ChipTemp.defaultProps = {
    color: 'default',
    disabled: false,
    selector: undefined,
};