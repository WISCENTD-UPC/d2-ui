e # d2-ui NEXT

[![Build Status](https://travis-ci.org/dhis2/d2-ui.svg)](https://travis-ci.org/dhis2/d2-ui)
[![Test Coverage](https://codeclimate.com/github/dhis2/d2-ui/badges/coverage.svg)](https://codeclimate.com/github/dhis2/d2-ui/coverage)
[![Code Climate](https://codeclimate.com/github/dhis2/d2-ui/badges/gpa.svg)](https://codeclimate.com/github/dhis2/d2-ui)
[![npm version](https://badge.fury.io/js/d2-ui.svg)](https://badge.fury.io/js/d2-ui)

# Material V1 based UI library for DHIS2 apps

"Bite the bullet." - [some dev writing
docs](https://github.com/mui-org/material-ui#should-i-start-with-v1-beta)

# Design goals

- Use any components available in Material UI v1:
  https://github.com/mui-org/material-ui/tree/v1-beta/src

- Standalone, installable complex components with its own dependency tree (e.g. D2-UI & D2):
    
    * `yarn add dhis2-app-header`
    * `import { AppHeader } from 'dhis2-app-header'`

- Simple imports (meaning the same as material-ui):

    * D2-UI: `import { Button } from 'd2-ui/Button'`   

- Future flexibility:

    Want to use `redux-forms` or whatever comes next? Go ahead!

- More opinionated than Material UI to match DHIS2 frontend recommendations as well as look'n'feel.

- Does not depend on `d2` for simple components.

# Getting started

Use the documentation at [Material UI NEXT](https://material-ui-next.com/) but `import` the components from `d2-ui`.

```
yarn install d2-ui
```

# How this works

`d2-ui` wraps Material UI through the `scripts/wrap-material-ui.js` script. It looks in `node_modules/material-ui` to figure out what components are available. The script then generates source code which `import`s the Material UI component and `export`s the component in the scope of `d2-ui`. The wrapped MUI files are put in `build/`.

Another script, `scripts/copy-files.js` is run which copies a set of files from the `d2-ui` package to the `build/` folder, including the `package.json` file. When copying `package.json` it flips the `private` property from `true` to `false`. **This is because the release process happens inside the `build/` folder.** A benefit of this is that a build can be shared, tested, deployed, inspected and `link`ed locally *before* it is pushed to NPM.

# Why this approach

- Automatically generating wrapper components based on whatever MUI version which is defined in `package.json` makes it faster and/or easier:

    * to use Material UI v1 *today*

    * to upgrade MUI versions since we don't have to handwire wrappers (which we do in `d2-ui@latest`), in a word, more maintenance friendly.
    
    * to stay in sync with the API in MUI v1 as [long as it is in API-breaking-beta](https://github.com/mui-org/material-ui/releases)
    
    * to leverage the excellent docs on material-ui-next.com.
    
    * to expose the same API as MUI does so (default export, named export, relative component import):
        
        * `import Dialog, { DialogTitle } from 'material-ui/Dialog'`
        
            * becomes
            
        * `import Dialog, { DialogTitle } from 'd2-ui/Dialog'`
 
  * to avoid making breaking changes to core components simply by having them available in our repository.
  
  * to define the scope of `d2-ui`:
  
    * Simple components: Whatever components we passthrough to Material UI
    * Complex components: Built from multiple simple components; can be deployed as standalone packages, may introduce other dependencies, may get external data, etc.
    * Style: Provides a DHIS2 skin as the default skin
   
- Porting relevant `d2-ui` components (app-header, etc.) can be done on a need-based basis.
 
# Alternative approaches

- We could fork Material UI and pull in all changes upstream.
- We could implement our own framework based on Material Design from Google
