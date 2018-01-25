//Temporary files for Strings/placeholders

export const strings = {
    checkbox: {
        values: 'Show Values',
        stacked: 'Use 100% Stacked values',
        cumulative: 'Use cumulative values',
        events: 'Include only completed events',
        style: 'No space between columns/bars',
        hideLegend: 'Hide chart legend', 
    },
    tabs: {
        dataLabel:'Data',
        axesLabel:'Axes',
        stylesLabel:'Styles',
    },
    data: {
        placeholder: 'Hide empty categories',
        trendLine: 'Trend line',
        targetValue: 'Target line value',
        targetTitle: 'Target line title',
        baseValue: 'Base line value',
        baseTitle: 'Base line title',  
        sortOrder: {
            defaultValue: 'Sort order',
            alternatives: ['None', 'Low to high', 'High to low']
        },
        aggregation: {
            defaultValue: 'Aggregation type',
            alternatives: [ 
        'By data element', 
        'Count', 'Average',
        'Average (sum in org unit hierarchy)',
        'Sum', 'Standard deviation', 'Variance',
        'Min', 'Max', 'Last Value', 'Last value (average in org unit hierarchy)'],
        }

    },    
    chartTitle: 'Chart Options', 
}
