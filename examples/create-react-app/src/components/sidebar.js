import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Sidebar } from 'd2-ui';
import { SvgIcon } from 'd2-ui';

const styles = {
    box: {
        position: 'relative',
        border: '1px solid #808080',
        borderRadius: 3,
        width: 512,
        height: 256,
        margin: 16,
    },
    header: {
        height: 44,
        background: '#276696',
        color: 'white',
        fontSize: 16,
        fontWeight: 700,
    },
    headerText: {
        padding: 12,
    },
    leftBar: {
        position: 'absolute',
    },
    page: {
        paddingLeft: 295 + 8,
        paddingTop: 5,
    },
};

const sections = [
    { key: 's1', label: 'Section 1' },
    { key: 's2', label: 'Section 2' },
    { key: 's3', label: 'Section 3' },
    { key: 's4', label: 'Section 4' },
];

const icons = ['Fingerprint', 'Alarm', '', 'Face'];

export default class SidebarExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSection: 's1',
            currentSearchText: '',
            lastSection: null,
            sidebarRef: null,
        };

    }
    changeSectionHandler = (key) => {
        this.setState({ currentSection: key });
    }
    changeSearchTextHandler = (searchText) => {
        console.log(searchText);
        this.setState({ currentSearchText: searchText});
    }

    storeRef = (ref) => {
        this.setState({ sidebarRef: ref });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <div style={styles.box}>
                        <div style={styles.header}>
                            <div style={styles.headerText}>Simple Sidebar</div>
                        </div>
                        <div style={styles.leftBar}>
                            <Sidebar
                                sections={sections}
                                onChangeSection={this.changeSectionHandler}
                                currentSection={this.state.currentSection}
                            />
                        </div>
                        <div style={styles.page}>Current section: {this.state.currentSection}</div>
                    </div>
                    <div style={styles.box}>
                        <div style={styles.header}>
                            <div style={styles.headerText}>Sidebar with Search</div>
                        </div>
                        <div style={styles.leftBar}>
                            <Sidebar
                                sections={sections.slice(0, 2)}
                                onChangeSection={this.changeSectionHandler}
                                currentSection={this.state.currentSection}
                                showSearchField
                                searchFieldLabel="Search"
                                onChangeSearchText={this.changeSearchTextHandler}
                                ref={this.storeRef}
                            />
                        </div>
                        <div style={styles.page}>
                            Current section: {this.state.currentSection}<br /><br />
                            Current search: {this.state.currentSearchText}
                        </div>
                    </div>
    
                    {/* With icons */}
                    <div style={styles.box}>
                        <div style={styles.header}>
                            <div style={styles.headerText}>Sidebar with icon names</div>
                        </div>
                        <div style={styles.leftBar}>
                            <Sidebar
                                sections={sections.map(({ key, label }, i) => ({ key, label, icon: icons[i] }))}
                                onChangeSection={this.changeSectionHandler}
                                currentSection={this.state.currentSection}
                            />
                        </div>
                        <div style={styles.page}>
                            Current section: {this.state.currentSection}<br /><br />
                            Icons are simple strings, which are converted into Material icons &lt;SvgIcon /> elements by the
                            Sidebar component.<br /><br />
                            This requires that the Material icons font is loaded by the app.
                        </div>
                    </div>
                    <div style={styles.box}>
                        <div style={styles.header}>
                            <div style={styles.headerText}>Sidebar with explicit icons</div>
                        </div>
                        <div style={styles.leftBar}>
                            <Sidebar
                                sections={sections.map(({ key, label }, i) => ({
                                    key,
                                    label,
                                    icon: <SvgIcon icon={icons[i]} />,
                                }))}
                                onChangeSection={this.changeSectionHandler}
                                currentSection={this.state.currentSection}
                            />
                        </div>
                        <div style={styles.page}>
                            Current section: {this.state.currentSection}<br /><br />
                            Icons are passed to the Sidebar component as &lt;SvgIcon /> elements.<br /><br />
                            This allows using custom icon fonts, or even SVG icons.
                        </div>
                    </div>
                    <div style={styles.box}>
                        <div style={styles.header}>
                            <div style={styles.headerText}>Simple Sidebar with container elements</div>
                        </div>
                        <div style={styles.leftBar}>
                            <Sidebar
                                sections={sections.map(({ key, label }, i) => ({
                                    key,
                                    label,
                                    containerElement: (<a href="path">path</a>),
                                }))}
                                onChangeSection={this.changeSectionHandler}
                                currentSection={this.state.currentSection}
                            />
                        </div>
                    </div>
    
                    {/* TODO: With top buttons (sidebarButtons prop) */}
                    {/* TODO: With custom styles */}
                </div>
            </MuiThemeProvider>
        );
    };
}
