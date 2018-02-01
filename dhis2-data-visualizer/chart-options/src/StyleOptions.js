import React from 'react';
import Checkbox from 'material-ui-next/Checkbox';
import { strings } from './utils';

/**
 * TODO: Fix redux with tab switching and value changes in DataOptions first
 */
const StyleOptions = () => {
    return (
        <div>
            <Checkbox label={strings.chart.noSpace}/>           
        </div>
    );
}

export default StyleOptions;