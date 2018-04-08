import React from 'react';
import PropTypes from 'prop-types';
import MuiChip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {SvgIcon} from 'd2-ui';
import { createClassName } from '../component-helpers/utils';

const chipSize = '30px';
const chipColor = '#333333';

const chipStyle = {
    margin: 3,
    height: chipSize,
    pointer: 'auto',
};

const labelStyle = {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '30px',
};

export const clickableStyle = { cursor: 'pointer' };
export const disabledStyle = { cursor: 'auto', opacity: 0.5 };
export const avatarIcons = { star: <SvgIcon icon={'star'} /> };

export const colors = {
    default: {
        color: chipColor,
        backgroundColor: '#e0e0e0',
    },
    primary: {
        color: chipColor,
        backgroundColor: '#b1deda',
    },
};

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

    return (
        <div className={wrapperClassName} style={wrapperStyle}>
            <MuiChip {...passThroughProps} style={style} />
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
};
