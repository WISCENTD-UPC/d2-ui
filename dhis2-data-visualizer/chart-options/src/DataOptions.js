import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'd2-ui/lib/select-field/SelectField';
import TextField from 'd2-ui/lib/text-field/TextField';
import MenuItem from 'material-ui/MenuItem';
import { strings } from './utils';
import './index.css'; 

/**
* TODO
*/
const listSelectFields = () => {

}
/**
 * input: value from Menu items to update the selectfield with
 */
const changeAlternative= (newValue) => {
    console.log(newValue);
}

/** 
 *      
 * @param {*} props  not receiving any props as of yet (work in progress)
 */
const DataOptions = (props) =>  {
    /**
     * TODO: map SelectFields and wrap some of them in divs,
     * Assign correct strings and styles based on hardcoded ids (?)
     */ 
     const filterArr = [ <SelectField {...props}/>, <Checkbox {...props}/>];

    return (
        <div>
            <Checkbox label={strings.data.values}/>
            <Checkbox label={strings.data.stacked}/>
            <Checkbox label={strings.data.cumulative}/>         
            <SelectField
                label={strings.data.hideEmptyCategories.defaultValue}
                onChange={(event) => { changeAlternative(event) }}
            >                            
                {strings.data.hideEmptyCategories.alternatives.map((alternative, id) => {
                    return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                })}
            </ SelectField>
            <div>
                <SelectField
                    label={strings.data.trendLine.defaultValue}
                    onChange={(event) => { changeAlternative(event) }}
                >                            
                    {strings.data.trendLine.alternatives.map((alternative, id) => {
                        return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                    })}
                </ SelectField>
            </div>
                <TextField 
                    label={strings.data.targetLineValue}
                    type={'number'}
                />                        
                <TextField label={strings.data.targetLineTitle}/>
            <div>
                <TextField 
                    label={strings.data.baseLineValue}
                    type={'number'}
                />                        
                <TextField label={strings.data.baseLineTitle}/>
            </div>
            <div>
            <SelectField
                    label={strings.data.sortOrder.defaultValue}
                    onChange={(event) => { changeAlternative(event) }}
                >                            
                    {strings.data.aggregation.alternatives.map((alternative, id) => {
                        return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                    })}
                </ SelectField>
            </div>
        </div>
    );
}


export default DataOptions;
