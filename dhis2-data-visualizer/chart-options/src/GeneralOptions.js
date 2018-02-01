import React, { Component } from 'react';
import Checkbox from 'material-ui-next/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui-next/Form';
import { strings } from './utils';


class GeneralOptions extends Component {

    state = {
        hideLegend: false,
        hideChartTitle: false,
        hideSubtitle: false
    };

    handleCheckBoxClick = name => event =>  {
        this.setState({ [name] : event.target.checked });
    }

    render = () => {
        return (
            <div>
                <h3>General</h3>
                <FormGroup>
                    <FormControlLabel
                        label={strings.general.hideLegend}
                        control={
                            <Checkbox 
                                checked={this.state.hideLegend}
                                onChange={this.handleCheckBoxClick("hideLegend")}
                            />}
                        />
                    <FormControlLabel
                        label={strings.general.hideChartTitle}
                        control={
                            <Checkbox 
                                checked={this.state.hideChartTitle}
                                onChange={this.handleCheckBoxClick("hideChartTitle")}
                            />}
                        />
                    <FormControlLabel
                        label={strings.general.hideSubtitle}
                        control={
                            <Checkbox 
                                checked={this.state.hideSubtitle}
                                onChange={this.handleCheckBoxClick("hideSubtitle")}
                            />}
                        />
                </FormGroup>   
            </div>
        );
    }
}
export default GeneralOptions;