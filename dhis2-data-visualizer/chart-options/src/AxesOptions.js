import React, { Component } from 'react';
import TextField from 'd2-ui/lib/text-field/TextField';
import { strings } from './utils';

/**
 * TODO: Fix redux with tab switching and value changes in DataOptions first
 */
class AxesOptions extends Component {
    state = { testValue: strings.axes.min };
    
    //Floating labeltextFixed 
    handleChange = (newValue) => {
        this.setState({
            testValue: newValue
        });
    }
    render() {
        return (
            <div>
            <div>
                <TextField 
                    label={strings.axes.min}
                    value={this.state.testValue}
                    type={'number'}
                    onChange={this.handleChange}
                    />
                <TextField 
                    label={strings.axes.max}
                    type={'number'}
                    /> 
            </div>
            <div>
                <TextField 
                    label={strings.axes.tickSteps}
                    type={'number'}
                /> 
            </div>
            <div>
                <TextField 
                    label={strings.axes.decimals}
                    type={'number'}
                /> 
            </div>
                <TextField 
                    label={strings.axes.rangeTitle}
                    fullWidth={true}
                    placeholder={"test"}
                /> 
            <div>
                <TextField 
                    label={strings.axes.domainTitle}
                    fullWidth={true}
                /> 
            </div>
        </div>
        );
    }
}

export default AxesOptions;