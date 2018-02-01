import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'd2-ui/lib/select-field/SelectField';
import TextField from 'd2-ui/lib/text-field/TextField';
import MenuItem from 'material-ui/MenuItem';
import { strings } from './utils';
import './index.css'; 


class DataOptions extends Component  {

    handleCategoryChange = (newValue, fieldName) => {
        this.props.handleSelectChange(newValue, fieldName);
    }

    render = () =>  {
        let output;
        if (this.props.tabContents.length === 0) {
            output = "Temp";
        } else {
            output = this.props.tabContents[0].category;            //howTo print the objects props on firstTime render / tabContents.keys = null
            //console.log(Object.keys(this.props.tabContents[0]));
        }
        return (
            <div>
                <Checkbox label={strings.data.values}/>
                <Checkbox label={strings.data.stacked}/>
                <Checkbox label={strings.data.cumulative}/>         
                <SelectField
                    label={strings.data.hideEmptyCategories.defaultValue}
                    value={output}
                    onChange={(event) => this.handleCategoryChange(event, "category")}
                >                            
                    {strings.data.hideEmptyCategories.alternatives.map((alternative, id) => {
                        return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                    })}
                </ SelectField>
                <div>
                    <SelectField
                        label={strings.data.trendLine.defaultValue}
                        value={this.props.trendVal}
                        onChange={(event) => { this.handleCategoryChange(event, "trendline")}}
                    >                            
                        {strings.data.trendLine.alternatives.map((alternative, id) => {
                            return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                        })}
                    </ SelectField>
                </div>
                    <TextField 
                        label={strings.data.targetLineValue}
                        onChange={(event) => { this.handleCategoryChange(event, "targetLineValue")}}
                        type={'number'}
                        />                        
                    <TextField 
                        label={strings.data.targetLineTitle}
                        onChange={(event) => { this.handleCategoryChange(event, "targetLineTitle")}}
                    />
                <div>
                <TextField 
                    label={strings.data.baseLineValue}
                    type={'number'}
                    onChange={(event) => { this.handleCategoryChange(event, "baseLineValue")}}
                />                        
                <TextField 
                    label={strings.data.baseLineTitle}
                    onChange={(event) => { this.handleCategoryChange(event, "baseLineTitle")}}
                />
                </div>
                <div>
                    <SelectField
                        label={strings.data.sortOrder.defaultValue}
                        onChange={(event) => { this.handleCategoryChange(event, "sortorder")}}
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
