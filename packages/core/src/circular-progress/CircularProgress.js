import PropTypes from 'prop-types';
import React from 'react';
import { CircularProgress as MuiCircularProgess } from 'material-ui/Progress';

function getSizes(large, small) {
    // Copy paste from MUI CircularProgress with v0,
    // v1: https://github.com/mui-org/material-ui/blob/v1-beta/src/Progress/CircularProgress.js
    const defaultMaterialUISize = 40; // Default prop size v1 = 40
    const defaultMaterialUIMargin = 5.25; // Default margin v1 =

    if (large) {
        return {
            size: defaultMaterialUISize * 2,
            margin: defaultMaterialUIMargin * 2,
        };
    }

    if (small) {
        return {
            size: defaultMaterialUISize / 2,
            margin: defaultMaterialUIMargin / 2,
        };
    }

    return {
        size: defaultMaterialUISize,
        margin: defaultMaterialUIMargin,
    };
}

export default function CircularProgress({ large, small, style }) {
    const sizes = getSizes(large, small);

    return (
        <MuiCircularProgress
            variant="indeterminate"
            size={sizes.size}
            style={Object.assign({ margin: sizes.margin }, style)}
        />
    );
}

CircularProgress.propTypes = {
    large: PropTypes.bool,
    small: PropTypes.bool,
    style: PropTypes.object,
};

CircularProgress.defaultProps = {
    large: false,
    small: false,
    style: {},
};
