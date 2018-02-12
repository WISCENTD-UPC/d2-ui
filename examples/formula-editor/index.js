import React from 'react';
import PropTypes from 'prop-types';

import {render} from 'react-dom';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
import { fade } from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import FormulaEditor from '../../src/formula-editor/FormulaEditor.component';

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
function renderExamples() {
    class Example extends React.Component {
        getChildContext() {
            return {
                muiTheme: getMuiTheme(style),
            };
        }

        render() {
            return this.props.children;
        }
    }
    Example.childContextTypes = {
        muiTheme: PropTypes.object,
    };

    const app = (
        <Example>
            <FormulaEditor />
        </Example>
    );
    render(app, document.getElementById('formulaEditor'));
}

renderExamples();