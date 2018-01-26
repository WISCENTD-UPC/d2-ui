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
 * TODO: Introduce redux & react-router (?), 
 * store/dispatch/subscribe on tab click actions, render options accordingly,
 */
const App = (props) =>  {
  
  //dispatch action, type: show_data_tab, show_axes_tab or show_styles_tab
    console.log("props is " + props.appState);
    return (
      <div className="chart">
        <MuiThemeProvider>
          <Card>
            <CardText>
              <h3>Chart Options</h3>
              <ChartTabs /> 
              {showSelectedTab[props.appState]}
              <GeneralOptions />          
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }

export default App;
