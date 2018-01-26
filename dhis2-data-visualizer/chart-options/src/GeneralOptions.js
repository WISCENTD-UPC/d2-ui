import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { strings } from './utils';

const GeneralOptions = () => {
    return (
        <div>
            <h3>General</h3>
            <Checkbox label={strings.general.hideLegend}/>
            <Checkbox label={strings.general.hideChartTitle}/>
            <Checkbox label={strings.general.hideSubtitle}/>
        </div>
    );
}
export default GeneralOptions;