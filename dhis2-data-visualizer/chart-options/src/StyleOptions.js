import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { strings } from './utils';

/**
 * TODO: Fix redux with tab switching and value changes in DataOptions first
 */
const StyleOptions = () => {
    return (
        <div>
            <Checkbox label={strings.checkbox.values}/>
            <Checkbox label={strings.checkbox.stacked}/>
            <Checkbox label={strings.checkbox.cumulative}/>           
        </div>
    );
}

export default StyleOptions;