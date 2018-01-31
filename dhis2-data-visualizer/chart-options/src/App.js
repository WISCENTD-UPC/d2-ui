import React from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChartTabs from './ChartTabs';
import DataOptions from './DataOptions';
import StyleOptions from './StyleOptions';
import AxesOptions from './AxesOptions';
import GeneralOptions from './GeneralOptions';
import './index.css';

const showSelectedTab = [<DataOptions/>, <AxesOptions />, <StyleOptions />]; //temporary variabel, deciding which tab is showing.

/**
 * TODO: Update the "redux solution" with a state tree
 */
const App = (props) =>  {
    return (
      <div className="chart">
        <MuiThemeProvider>
          <Card>
            <CardText>
              <h3>Chart Options</h3>
              <ChartTabs /> 
              {showSelectedTab[props.appState.currentTab]}
              <GeneralOptions />          
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }

export default App;
