import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { generateUid } from 'd2/lib/uid';
import FloatingActionButton from 'material-ui/FloatingActionButton/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DataTable from '../data-table/DataTable.component';
import EditLegendItem from './EditLegendItem.component';
import { openEditDialogFor } from './LegendItem.store';

class LegendItems extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            editDialogOpen: false,
        };
    }

    onAddLegendItem = () => {
        const legend = {
            id: generateUid(),
            color: '#FFA500', // Orange is default
        };

        openEditDialogFor(legend);
    };

    onUpdateItem = () => {
        this.props.updateItem(this.props.items);
    }

    render() {
        const props = this.props;

        const actions = {
            edit: openEditDialogFor,
            delete: props.deleteItem,
        };

        const styles = {
            component: {
                position: 'relative',
            },
            button: {
                float: 'right',
                position: 'absolute',
                right: 20,
                top: -29,
            },
        };

        const orderedItems = props.items.sort((left, right) => Number(left.startValue) > Number(right.startValue));
        return (
            <div style={styles.component}>
                <FloatingActionButton style={styles.button} onClick={this.onAddLegendItem}>
                    <ContentAdd />
                </FloatingActionButton>

                <DataTable
                    rows={orderedItems}
                    columns={['name', 'startValue', 'endValue', 'color']}
                    primaryAction={() => {}}
                    contextMenuActions={actions}
                />

                <EditLegendItem onItemUpdate={this.onUpdateItem} />
            </div>
        );
    }
}

LegendItems.contextTypes = {
    d2: PropTypes.object,
};

LegendItems.propTypes = {
    updateItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

LegendItems.defaultProps = {
    items: [],
};

export default LegendItems;
