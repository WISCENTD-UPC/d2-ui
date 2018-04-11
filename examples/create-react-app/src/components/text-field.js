import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// import {InputField} from 'd2-ui';

 import { TextFieldTemp as InputField } from './TextFieldTemp';
 
const style = {
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export default class InputFields extends Component {
    state = {
        multiHintText: '',
        singleHintText: '',
        valueField1: '',
        valueField2: '',
        valueField3: '',
        valueField4: '',
    };

    onChange = (field, value) => {
        this.setState({ [field]: value });
    };
    
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={style}>
                    <InputField
                        label="Text"
                        value={this.state.valueField1}
                        onChange={(event) => this.onChange("valueField1", event.target.value)}
                    />
                    <InputField
                        label="Number"
                        type="number"
                        value={this.state.valueField2}
                        onChange={(event) => this.onChange("valueField2", event.target.value)}
                    />
                    <InputField
                        label="Default value"
                        type="number"
                        value={this.state.valueField3 || 100}
                        onChange={(event) => this.onChange("valueField3", event.target.value)}
                    />
                    <InputField
                        placeholder="Hint text"
                        type="text"
                        value={this.state.singleHintText}
                        onChange={(event) => this.onChange('singleHintText', event.target.value)}
                    />
                    <InputField
                        placeholder="Multiline field showing 2 rows and up to 4 rows"
                        type="text"
                        multiline
                        rows={2}
                        rowsMax={4}
                        value={this.state.multiHintText}
                        onChange={(event) => this.onChange('multiHintText', event.target.value)}
                    />
                    <InputField
                        placeholder="Full width"
                        type="text"
                        fullWidth
                        value={this.state.valueField4}
                        onChange={(event) => this.onChangeValue("valueField4", event.target.value)}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}
