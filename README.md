# d2-ui NEXT

[![Build Status](https://travis-ci.org/dhis2/d2-ui.svg)](https://travis-ci.org/dhis2/d2-ui)
[![Test Coverage](https://codeclimate.com/github/dhis2/d2-ui/badges/coverage.svg)](https://codeclimate.com/github/dhis2/d2-ui/coverage)
[![Code Climate](https://codeclimate.com/github/dhis2/d2-ui/badges/gpa.svg)](https://codeclimate.com/github/dhis2/d2-ui)
[![npm version](https://badge.fury.io/js/d2-ui.svg)](https://badge.fury.io/js/d2-ui)

# Material V1 based UI library for DHIS2 apps

"Bite the bullet" - [some dev writing
docs](https://github.com/mui-org/material-ui#should-i-start-with-v1-beta)

## Design goals

- Use any components available in Material UI v1:
  https://github.com/mui-org/material-ui/tree/v1-beta/src

- Standalone, installable components with D2 and D2-UI:
    
    `yarn add dhis2-app-header`

- Simple imports:

    * Material UI: `import { Button } from 'material-ui/Button'`
    * D2-UI: `import { Button } from 'd2-ui/Button'`
    * Standalone: `import { AppHeader } from 'dhis2-app-header'`

- Future flexibility:

    Want to use `redux-forms` or whatever comes next? Go ahead!
