import React, { Component } from 'react';

import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChartTabs from './ChartTabs';
import DataOptions from './DataOptions';
import StyleOptions from './StyleOptions';
import AxesOptions from './AxesOptions';
import './index.css';

let showSelectedTab = [<DataOptions/>, <AxesOptions />, <StyleOptions />]; //temporary variabel, deciding which tab is showing.

/**
 * TODO: Introduce redux & react-router (?), 
 * store/dispatch/subscribe on tab click actions, render options accordingly,
 */
class App extends Component {
  state = { currentTabIndex: 0 }
  
  handleTabClick = (index) => {
    this.setState({ currentTabIndex: index });
  }

  render() {
    return (
      <div className="chart">
        <MuiThemeProvider>
          <Card>
            <CardText>
              <h3>Chart Options</h3>                 
              <ChartTabs handleTabClick={this.handleTabClick}/> 
              {showSelectedTab[this.state.currentTabIndex]}
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
