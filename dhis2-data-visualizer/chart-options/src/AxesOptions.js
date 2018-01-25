import React from 'react';
import SelectField from 'd2-ui/lib/select-field/SelectField';
import { strings } from './utils';

/**
 * TODO: Fix redux with tab switching and value changes in DataOptions first
 */
const AxesOptions = () => {
    return (
        <div>
            <SelectField label={strings.data.placeholder}/>
            <SelectField label={strings.data.placeholder}/>
            <SelectField label={strings.data.placeholder}/>
            <SelectField label={strings.data.placeholder}/>
            <SelectField label={strings.data.placeholder}/>
        </div>
    );
}

export default AxesOptions;