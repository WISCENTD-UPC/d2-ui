import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
import Store from '../../src/store/Store';
import ExpressionManager from '../../src/expression-manager/ExpressionManager';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
        constructor(props) {
            super(props);

            d2.i18n.translations['search_by_name'] = 'Search by name';
            d2.i18n.translations['field_is_required'] = 'Field is required';
            d2.i18n.translations['organisation_unit_counts'] = 'Organisation Unit Counts';
            d2.i18n.translations['please_select_a_program'] = 'Please select a program';

            d2.i18n.translations['program_data_elements'] = 'Program data elements';
            d2.i18n.translations['program_tracked_entity_attributes'] = 'Program tracked entity attributes';
            d2.i18n.translations['program_indicators'] = 'Program indicators';

            d2.i18n.translations['no_program_indicators'] = 'No program indicators for this program';
            d2.i18n.translations['no_tracked_entity_attributes'] = 'No tracked entity attributes for this program';
        }

        render() {
            return this.props.children;
        }
    }
    Example.childContextTypes = {
        d2: PropTypes.object,
    };

    const store = Store.create();

    const app = (
        <Example>
            <ExpressionManager
                titleText="My indicator expression manager"
                descriptionLabel="description"
                expressionStatusStore={store}
                expressionChanged={value => ({ ...value })}
                descriptionValue=""
                formulaValue=""
            />
        </Example>
    );
    render(app, document.getElementById('expression-manager'));
}

const baseUrl = `${dhisDevConfig.baseUrl}/api`;

D2Lib.config.baseUrl = baseUrl;
D2Lib.init({ baseUrl }).then(renderExamples);
