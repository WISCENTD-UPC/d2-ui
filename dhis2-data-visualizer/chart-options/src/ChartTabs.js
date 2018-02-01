import React, { Component } from 'react';
import Tabs, { Tab } from 'd2-ui/lib/tabs/Tabs';
import { strings } from './utils';
import { store } from './Store';
import * as actionTypes from './ActionTypes';

/**
 * TODO: Fix redux with tab switching and value changes in DataOptions first
 */
class ChartTabs extends Component {

    //?? ref scheduler app, content.jsx (handlefieldchange)
    //dispatch action (show data tab,  show axes tab, show styles tab)
    handleChange = tabID => () => {
        if ( tabID === 0 ) {
            store.dispatch({ 
                type: actionTypes.TOGGLE_TAB, 
                id: tabID, 
            });
          } else if ( tabID === 1 ){
            store.dispatch({ 
                type: actionTypes.TOGGLE_TAB, 
                id: tabID
            });
          } else if ( tabID === 2 ) {
            store.dispatch({ 
                type: actionTypes.TOGGLE_TAB, 
                id: tabID
            });
          }
    }

    render = () => {
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