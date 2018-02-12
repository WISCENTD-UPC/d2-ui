import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Tabs, Tab } from '../../src/tabs/Tabs';

injectTapEventPlugin();

const style = {
    margin: 16,
};

const textFields = (
    <div style={style}>
        <Tabs>
            <Tab label='First'>
                First tab
            </Tab>
            <Tab label='Second'>
                Second tab
            </Tab>
            <Tab label='Third'>
                Third tab
            </Tab>
        </Tabs>
    </div>
);

render(textFields, document.getElementById('tabs'));
