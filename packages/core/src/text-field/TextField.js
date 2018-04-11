import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from 'material-ui-next/TextField';
import { createClassName } from '../component-helpers/utils';

<<<<<<< HEAD
const InputField = (props) => {
    const { selector, ...passThroughProps } = props;
    const className = createClassName('d2-ui-textfield', selector);

    return (<MuiTextField {...passThroughProps} />);
};

InputField.propTypes = {
    /**
     * If set, helps users fill forms faster with specific auto-complete alternatives.
     */
    autoComplete: PropTypes.string,

    /**
     * If set, sets the defaultValue of the <Input/> element.
     */
    defaultValue: PropTypes.string,
=======
// const d2DefaultStyle = {};

const TextField = (props) => {
    const { selector, ...passThroughProps } = props;
    const className = createClassName('d2-ui-textfieldtemp', selector);

    return (<MuiTextField {...passThroughProps} />);
};
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f

    /**
<<<<<<< HEAD
=======
     * If set, helps users fill forms faster with specific auto-complete alternatives.
     */
    autoComplete: PropTypes.string,

    /**
     * If set, sets the defaultValue of the <Input/> element.
     */
    defaultValue: PropTypes.string,

    /**
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
     * If true, the label will be dsiplayed in an error state.
     */
    error: PropTypes.bool,

    /**
     * If true, expands the <TextField> to the full width of its container.
     */
    fullWidth: PropTypes.bool,

    /**
     * If set, sets the helper text content.
     */
    helperText: PropTypes.node,

    /**
     * The id of the <input/> element, use to make the "label" and "helperText" properties
<<<<<<< HEAD
     * accesible for screen readers. 
     */
    id: PropTypes.string,

    /**
     * If set, sets properties for the <InputLabel/> element.
     */
    InputLabelProps: PropTypes.object,

    /**
     * If set, sets properties for the <Input/> element.
     */
    InputProps: PropTypes.object,

    /**
     * If set, sets the label content.
     */
    label: PropTypes.node,
=======
     * accesible for screen readers.
     */
    id: PropTypes.string,

    /**
     * If set, sets properties for the <InputLabel/> element.
     */
    InputLabelProps: PropTypes.object,

    /**
     * If set, sets properties for the <Input/> element.
     */
    InputProps: PropTypes.object,

    /**
     * If set, sets the label content.
     */
    label: PropTypes.node,

    /**
     * If set, sets the CSS class name for the label element.
     */
    labelClassName: PropTypes.string,

>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    /**
     * If "dense" or "normal", adjusts vertical spacing for this and contained components.
     */
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),

    /**
     * If true, renders a "textarea" element instead of an input.
     */
    multiline: PropTypes.bool,

    /**
     * If true, sets the name attribute of the <input/> element
<<<<<<< HEAD
=======
     */
    name: PropTypes.string,

    /**
     * Callback fired when value is changed, requried property:
     *
     *      function(event: object) => void
     *
     * event: The event source of the callback.
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
     */
    name: PropTypes.string,

    /**
<<<<<<< HEAD
     * Callback fired when value is changed, requried property:
     * 
     *      function(event: object) => void
     * 
     * event: The event source of the callback. 
     */
    onChange: PropTypes.func.isRequired,

    /**
     * If set, sets the short hint displayed in the input before the user enters a value.
=======
     * If set, sets the short hint displayed in the input before the user enters a value.
     */
    placeholder: PropTypes.string,

    /**
     * Sets the number of rows to display when multiline option is set to true.
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
     */
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
<<<<<<< HEAD
     * Sets the number of rows to display when multiline option is set to true.
     */
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Sets the maximum number of rows to display when multiline option is set to true
     */
    rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * If true, renders a <Select/> element while passing the <Input/> element to <Select/> as
     * <input/> parameter. If this option is true you must pass the options of the <Select/> as
     * children.
     */
=======
     * Sets the maximum number of rows to display when multiline option is set to true
     */
    rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * If true, renders a <Select/> element while passing the <Input/> element to <Select/> as
     * <input/> parameter. If this option is true you must pass the options of the <Select/> as
     * children.
     */
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    select: PropTypes.bool,

    /**
     * If set, adds a class to the element in the format d2-ui-textfield-selector
     */
    selector: PropTypes.string,

    /**
     * Ovverride the inline-styles of the root element
     */
    style: PropTypes.object,

    /**
     * Sets the properties for the <Select/> element when select option is set to true.
     */
    SelectProps: PropTypes.object,

    /**
     * If set, sets the type attribute of the <Input/> element. It should be a valid HTML5
     * input type.
     */
    type: PropTypes.string,

    /**
     * If set, sets the value of the <Input/> element, required for a controlled component
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

};

<<<<<<< HEAD
InputField.defaultProps = {
=======
TextField.defaultProps = {
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    autoComplete: undefined,
    defaultValue: undefined,
    error: false,
    fullWidth: false,
    helperText: undefined,
    id: undefined,
    InputLabelProps: undefined,
    InputProps: undefined,
    label: undefined,
<<<<<<< HEAD
=======
    labelClassName: undefined,
>>>>>>> f458ee6a57d458f4d07f46c1e3f5b8d70411619f
    margin: undefined,
    multiline: false,
    name: undefined,
    placeholder: undefined,
    rows: undefined,
    rowsMax: undefined,
    select: undefined,
    selector: undefined,
    style: undefined,
    SelectProps: undefined,
    type: undefined,
    value: undefined,
};

export default InputField;