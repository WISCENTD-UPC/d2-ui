import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'd2-ui/lib/select-field/SelectField';
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
            <Checkbox label={strings.checkbox.values}/>
            <Checkbox label={strings.checkbox.stacked}/>
            <Checkbox label={strings.checkbox.cumulative}/>
            <div>
                <SelectField label={strings.data.placeholder}/>
            </div>
            <div>
                <SelectField label={strings.data.trendLine}/>
            </div>
            <div>
                <SelectField
                    className="lineValue"
                    label={strings.data.targetValue}
                />
                <SelectField label={strings.data.targetTitle}/>
            </div>
            <div>
                <SelectField label={strings.data.baseValue}/>
                <SelectField label={strings.data.baseTitle}/>
            </div>
                <SelectField
                    label={strings.data.sortOrder.defaultValue}
                    onChange={(event) => { changeAlternative(event) }}
                >                            
                    {strings.data.aggregation.alternatives.map((alternative, id) => {
                        return(<MenuItem key={id} value={alternative} primaryText={alternative}/>)
                    })}
                </ SelectField>
            <div>
                <SelectField 
                    label={strings.data.aggregation.defaultValue}
                    items={strings.data.aggregation.alternatives.map((alternative, id) => {
                        return({id, alternative})
                    })}        
                />
            </div>
        </div>
    );
}


export default DataOptions;
