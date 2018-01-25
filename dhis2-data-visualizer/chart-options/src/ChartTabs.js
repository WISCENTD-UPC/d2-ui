import React, { Component } from 'react';
import Tabs, { Tab } from 'd2-ui/lib/tabs/Tabs';
import { strings } from './utils';

/**
 * TODO: Fix redux with tab switching and value changes in DataOptions first
 */
class ChartTabs extends Component {

    //?? ref scheduler app, content.jsx (handlefieldchange)
    handleChange = index => () => {
        this.props.handleTabClick(index);
    }
    render() {
        return (
            <div>
                <Tabs>
                    <Tab 
                        label={strings.tabs.dataLabel}
                        onActive={this.handleChange(0)}
                        />
                    <Tab 
                        label={strings.tabs.axesLabel}
                        onActive={this.handleChange(1)}
                    />
                    <Tab 
                        label={strings.tabs.stylesLabel}
                        onActive={this.handleChange(2)}
                    />
                </Tabs>
            </div>
        );          
    }
}
    
export default ChartTabs;