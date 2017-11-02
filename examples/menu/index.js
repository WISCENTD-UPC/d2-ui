import React from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import { Menu, MenuItem } from '../../src/menu/Menu';

injectTapEventPlugin();

const style = {
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const textFields = (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={style}>
            <Paper>
                <MenuItem>Cat</MenuItem>
            </Paper>
            <Paper>
                <Menu>
                    <MenuItem>Cat</MenuItem>
                    <MenuItem>Mouse</MenuItem>
                    <MenuItem>Dog</MenuItem>
                </Menu>
            </Paper>
            <Paper>
                <Menu>
                    <MenuItem leftIcon='remove_red_eye' disabled={true}>Preview</MenuItem>
                    <MenuItem leftIcon='person_add'>Share</MenuItem>
                    <MenuItem leftIcon='link'>Get link</MenuItem>
                </Menu>
            </Paper>
            <Paper>
                <Menu>
                    <MenuItem>Cat</MenuItem>
                    <MenuItem>Mouse</MenuItem>
                    <MenuItem>Dog</MenuItem>
                </Menu>
            </Paper>
        </div>
    </MuiThemeProvider>
);

render(textFields, document.getElementById('menu'));
