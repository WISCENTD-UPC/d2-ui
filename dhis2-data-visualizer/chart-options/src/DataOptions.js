import React, { Component } from 'react';
import { FormGroup, FormControlLabel } from 'material-ui-next/Form';
import Checkbox from 'material-ui-next/Checkbox';
import SelectField from 'd2-ui/lib/select-field/SelectField';
import TextField from 'd2-ui/lib/text-field/TextField';
import { MenuItem } from 'material-ui/Menu';
import { strings } from './utils';
import './index.css'; 


class DataOptions extends Component  {

    state = { 
        showValues: false,
        useCumulative: false,
        useStacked: false
    };
    handleCategoryChange = (newValue, fieldName) => {
        this.props.handleSelectChange(newValue, fieldName);
    }
    handleCheckBoxClick = name => event =>  {
        this.setState({ [name] : event.target.checked });
    }

    render = () =>  {
        return (
            <div>
                <FormGroup>
                    <FormControlLabel
                        label={strings.data.values}
                        control={
                            <Checkbox 
                                checked={this.state.showValues}
                                onChange={this.handleCheckBoxClick("showValues")}
                            />}
                    />
                    <FormControlLabel
                        label={strings.data.cumulative}
                        control={
                            <Checkbox 
                                checked={this.state.useCumulative}
                                onChange={this.handleCheckBoxClick("useCumulative")}
                            />}
                    />
                    <FormControlLabel
                        label={strings.data.stacked}
                        control={
                            <Checkbox 
                                checked={this.state.useStacked}
                                onChange={this.handleCheckBoxClick("useStacked")}
                            />}
                    />
                </FormGroup>     
                <SelectField
                        label={strings.data.hideEmptyCategories.defaultValue}
                        onChange={(event) => { this.handleCategoryChange(event, "category")}}
                        value={this.props.tabContents[0].category}
                    >                            
                        {strings.data.hideEmptyCategories.alternatives.map((alternative, id) => {
                            return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                        })}
                    </ SelectField>             
                <div>
                <SelectField
                        label={strings.data.trendLine.defaultValue}
                        onChange={(event) => { this.handleCategoryChange(event, "trendline")}}
                        value={this.props.tabContents[0].trendline}
                    >                            
                        {strings.data.trendLine.alternatives.map((alternative, id) => {
                            return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                        })}
                    </ SelectField>
                </div>
                    <TextField 
                        label={strings.data.targetLineValue}
                        value={this.props.tabContents[0].targetLineValue}
                        onChange={(event) => {this.handleCategoryChange(event, "targetLineValue")}}
                        type={'number'}
                        />                        
                    <TextField 
                        label={strings.data.targetLineTitle}
                        value={this.props.tabContents[0].targetLineTitle}
                        onChange={(event) => {this.handleCategoryChange(event, "targetLineTitle")}}
                    />
                <div>
                <TextField 
                    label={strings.data.baseLineValue}
                    value={this.props.tabContents[0].baseLineValue}
                    type={'number'}
                    onChange={(event) => {this.handleCategoryChange(event, "baseLineValue")}}
                />                        
                <TextField 
                    label={strings.data.baseLineTitle}
                    value={this.props.tabContents[0].baseLineTitle}
                    onChange={(event) => {this.handleCategoryChange(event, "baseLineTitle")}}
                />
                </div>
                <div>
                    <SelectField
                        label={strings.data.sortOrder.defaultValue}
                        onChange={(event) => { this.handleCategoryChange(event, "sortorder")}}
                        value={this.props.tabContents[0].sortorder}
                    >                            
                        {strings.data.aggregation.alternatives.map((alternative, id) => {
                            return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                        })}
                    </ SelectField>
                </div>
            </div>
        );
    }
}

export default DataOptions;

/**
 *  Does not work, AFAIK state: hasValue does not update
 * 
 *                 <SelectField
                    label={strings.data.hideEmptyCategories.defaultValue}
                    value={this.props.tabContents[0].category}
                    onChange={(event) => this.handleCategoryChange(event.name, "category")}
                    items={strings.data.hideEmptyCategories.alternatives.map((alternative, id) => {
                        return {key: id, name: alternative}
                    })}
 * 
 */

 /*
*   Works, hasValue state updates and value changes correctly.

                    <SelectField
                        label={strings.data.sortOrder.defaultValue}
                        onChange={(event) => { this.handleCategoryChange(event, "sortorder")}}
                        value={this.props.tabContents[0].sortorder}
                    >                            
                        {strings.data.aggregation.alternatives.map((alternative, id) => {
                            return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                        })}
                    </ SelectField>
*
*/