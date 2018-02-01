import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChartTabs from './ChartTabs';
import DataOptions from './DataOptions';
import StyleOptions from './StyleOptions';
import AxesOptions from './AxesOptions';
import GeneralOptions from './GeneralOptions';
import './index.css';
import { store } from './Store';
import * as actionTypes from './ActionTypes';


/**
 * TODO: Update the "redux solution" with a state tree
 */
class App extends Component  {

  handleSelectChange = (newValue, fieldName) => {
    store.dispatch({
      type: actionTypes.TOGGLE_SELECTFIELD, 
      id: 0,                                        //hardcoded to dispatch Data tab jobs (temporary)
      name:fieldName, 
      value: newValue});
  }

  showSelectedTab = tabIndex => {
    const tabs = [
      <DataOptions 
        handleSelectChange={this.handleSelectChange} 
        tabContents={this.props.appState.tabContents}/>, 
      <AxesOptions />, 
      <StyleOptions />
    ]
    return tabs[tabIndex];
  }

  render = () => {   
    return (
      <div className="chart">
        <MuiThemeProvider>
          <Card>
            <CardText>
              <h3>Chart Options</h3>
              <ChartTabs /> 
                {this.showSelectedTab(this.props.appState.currentTab)}
              <GeneralOptions />          
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
