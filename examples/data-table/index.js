import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import blue from 'material-ui/colors/blue';
import common from 'material-ui/colors/common';
import grey from 'material-ui/colors/grey';
const blue500 = blue['500'];
const blue700 = blue['700'];
const lightBlack = common.lightBlack;
const grey300 = grey['300'];
const grey500 = grey['500'];
const white = common.white;
const darkBlack = common.darkBlack;
import { fade } from 'material-ui/styles/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import D2Lib from 'd2/lib/d2';

import DataTable from '../../src/data-table/DataTable.component';
import '../../scss/DataTable.scss';

const dhisDevConfig = DHIS_CONFIG;

const style = {
    spacing: Spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: lightBlack,
        accent1Color: '#276696',
        accent2Color: '#E9E9E9',
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
    },
};

function renderExamples(d2) {
    class Example extends React.Component {
        render() {
            return this.props.children;
        }
    }
    Example.childContextTypes = {
        d2: PropTypes.object,
    };
    Example.propTypes = { children: PropTypes.node.isRequired };

    const myRows = [
        { firstName: 'John', lastName: 'Traore', lastUpdated: '2014-11-11T21:56:05.469' },
        { firstName: 'Tom', lastName: 'Wakiki', lastUpdated: '2015-08-06T13:28:05.512' },
    ];

    const cma = {
        edit(...args) {
            console.log('Edit', ...args);
        },
    };

    const app = (
        <Example>
            <DataTable
                columns={['firstName', 'lastName', 'lastUpdated']}
                rows={myRows}
                contextMenuActions={cma}
            />
        </Example>
    );
    render(app, document.getElementById('data-table'));
}

const baseUrl = `${dhisDevConfig.baseUrl}/api`;

D2Lib.config.baseUrl = baseUrl;
D2Lib.init({ baseUrl }).then((d2) => {
    Object.assign(d2.i18n.translations, {
        first_name: 'First name',
        last_name: 'Last name',
        last_updated: 'Last updated',
    });

    renderExamples(d2);
});
