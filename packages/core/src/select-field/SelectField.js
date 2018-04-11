import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/fp/isString';
<<<<<<< HEAD
import Select from 'material-ui-next/Select';
import { InputLabel } from 'material-ui-next/Input';
import { FormControl } from 'material-ui-next/Form';
import { CircularProgress } from 'material-ui-next/Progress';
// import { createClassName } from '../component-helpers/utils';
=======
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { CircularProgress } from 'material-ui/Progress';
import { createClassName } from '../component-helpers/utils';
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f


const d2DefaultStyle = {
    loadingIndicator: {
        teaxtAlign: 'center',
    },
    formControl: {
        minWidth: 200,
    },
};

const displayLoadingIndicator = (loading) => {
    let node;
<<<<<<< HEAD

    if (loading === true) 
        node = <CircularProgress size={30} />;
    else if (isString(loading))
        node = <div>{loading}</div>
};

const displayLoadingIndicator = (loading) => {
    let node;
    if (isString(loading)) node = <div>{loading}</div>;
    else node = <CircularProgress size={30} style={d2DefaultStyle.loadingIndicator} />;

    return node;
};

export const SelectTemp = (props) => {
    const { children, error, inputLabelText, label, loading, value, items, selector, ...passThroughProps } = props;

   // const className = createClassName('d2-ui-selectfield', selector);
=======
    if (isString(loading)) node = <div>{loading}</div>;
    else node = <CircularProgress size={30} style={d2DefaultStyle.loadingIndicator} />;

    return node;
};

const SelectField = (props) => {
    const { children, error, inputLabelText, loading, selector, ...passThroughProps } = props;

    const className = createClassName('d2-ui-selectfield', selector);
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    return (
        <FormControl
            style={props.style || d2DefaultStyle.formControl}
            error={error}
        >
            <InputLabel>{inputLabelText}</InputLabel>
            <Select
<<<<<<< HEAD
                value={value}
                {...passThroughProps}
            >
                {getLoadingIndicator(loading) || children
=======
                {...passThroughProps}
            >
                { !loading || children
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
                    ? children
                    : displayLoadingIndicator(loading) }
            </Select>
        </FormControl>
    );
};

<<<<<<< HEAD
SelectTemp.propTypes = {
=======
SelectField.propTypes = {
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
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

<<<<<<< HEAD
SelectTemp.defaultProps = {
    
};

export default SelectTemp;
=======
SelectField.defaultProps = {

};

export default SelectField;
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
