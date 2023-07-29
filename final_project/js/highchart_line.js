Highcharts.chart('container-line', {
    chart: {
        type: 'area',
        backgroundColor:'#efeff0ce'
    },
    title: {
        text: 'Total Cryptocurrency Laundered by Year, 2015-2022'
    },
    subtitle: {
        text: 'Source: ' +'<a href="https://blog.chainalysis.com/reports/crypto-money-laundering-2022/#overall-mixer-usage"' +
        'target="_blank">Chainalysis </a>'
    },
    xAxis: {
        categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        tickmarkPlacement: 'on',
        title: {
            text: 'Year'
        }
    },
    yAxis: {
        title: {
            text: 'Total Laundered (£B)'
        },
        labels: {
            formatter: function () {
                return this.value + ' B';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>£{point.y:.1f} B</b>'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#6666ff',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#6666ff'
            },
            states:{
                hover:{
                    enabled:true
                }
            }
        }
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Total Laundered',
        data: [0.3, 0.84, 3.44, 2.6, 9, 6.5, 10.85, 18.18]
    }]
});