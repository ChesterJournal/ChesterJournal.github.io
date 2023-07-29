Highcharts.chart('container-variwide', {

    chart: {
        type: 'variwide',
        backgroundColor:'#efeff0ce'
    },

    title: {
        text: '2022 Authorised Push Payment Scam by Type'
        
    },

    subtitle: {
        text: 'Source: ' +
        '<a href="https://www.ukfinance.org.uk/system/files/2023-05/Annual%20Fraud%20Report%202023_0.pdf"' +
        'target="_blank">UK Finance</a>'
    },

    xAxis: {
        type: 'category'
    },

    caption: {
        text: 'Column widths are proportional to volumes',
        style: {
            color: '#FFFFFF', // White color
            textOutline: '1px 1px black' // Black outline
        }   
    },
    exporting: {
        enabled: false
    },

    legend: {
        enabled: false,
    },

    series: [{
        name: 'Scam Types',
        data: [
            ['Investment Scam', 114.1, 10085],
            ['Impersonation: Police/Bank Staff Scam', 109.8, 16948],
            ['Purchase Scam', 67, 117170],
            ['Impersonation Scam: Other', 67.8, 28419],
            ['Invoice And Mandate Scam', 49.5, 3340],
            ['Advance Fee Scam', 32.2, 27329],
            ['Romance Scam', 31.3, 3649],
            ['Ceo Scam', 13.4, 432]

        ],
        dataLabels: {
            enabled: true,
            format: '€{point.y:.0f}m'
        },
        tooltip: {
            pointFormat: 'Value: <b>£ {point.y}m</b><br>' +
                'Volume: <b>{point.z} cases</b><br>'
        },
        borderRadius: 3,
        colorByPoint: true
    }]

});
