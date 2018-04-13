import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/fp/isString';
import MuiSelect from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { MuiCircularProgress } from 'material-ui/Progress';
import { createClassName } from '../component-helpers/utils';


const d2DefaultStyle = {
    loadingIndicator: {
        teaxtAlign: 'center',
    },
    formControl: {
        minWidth: 200,
    },
};

const getLoadingIndicator = (loading) => {
    let node;

    if (loading === true) {
        node = <MuiCircularProgress size={30} />;
    } else if (isString(loading)) {
        node = <div>{loading}</div>;
    }
    return node;
};

const getLoadingStyle = (loading) => {
    let listStyle;

    if (loading === true) {
        listStyle = {
            teaxtAlign: 'center',
        };
    } else if (isString(loading)) {
        listStyle = {
            paddingLeft: 24,
            lineHeight: '32px',
            fontStyle: 'italic',
        };
    }

    return listStyle;
};

const getMenuItems = (items, isLoading, isMultiple, value) => {
    if (isLoading || !Array.isArray(items)) {
        return null;
    }
    return items.map(item => (
        <MenuItem
            key={item.id}
            value={item.id}
        >
            {item.name}
        </MenuItem>
    ));
};

export const SelectField = (props) => {
    const { children, error, label, loading, multiple, value, items, selector, ...selectProps } = props;
    const className = createClassName('d2-ui-selectfield', selector);

    return (
        <FormControl
            style={d2DefaultStyle.formControl}
            error={error}
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                value={value || ''}
                {...selectProps}
            >
                {getLoadingIndicator(loading)}
                {getMenuItems(items, loading, multiple, value)}
                {!loading && children ? children : null}
            </MuiSelect>
        </FormControl>
    );
};

SelectField.propTypes = {
    autoWidth: PropTypes.bool,
    error: PropTypes.bool,
    children: PropTypes.node,
    classes: PropTypes.object,
    displayEmpty: PropTypes.bool,
    loading: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    input: PropTypes.element,
    inputLabelText: PropTypes.string,
    inputProps: PropTypes.object,
    MenuProps: PropTypes.object,
    multiple: PropTypes.bool,
    native: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    open: PropTypes.bool,
    renderValue: PropTypes.func,
    selector: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ])),
    ]),
};

export default SelectField;
