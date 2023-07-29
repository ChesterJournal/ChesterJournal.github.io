Highcharts.chart('container-venn', {
    accessibility: {
        point: {
            valueDescriptionFormat: '{point.name}: {point.longDescription}.'
        }
    },
    series: [{
        type: 'venn',
        data: [{
            sets: ['A'],
            value: 10,
            name: 'Authorised Push Payment scams, 2022',
            longDescription: '£485.2 m',
            color:'#c25b4c'
        }, {
            sets: ['B'],
            value: 3.3,
            name: 'Sources of illicit cryptocurrency sent to mixers, 2022',
            longDescription: '£161 m',
            color:'#f3a441'
        }, {
            sets: ['A', 'B'],
            value: 3.3
        }]
    }],
    tooltip: {
        headerFormat:
            '<span style="color:{point.color}">\u2022</span> ',
        pointFormat: '{point.longDescription}<br><span style="font-size: 10px">Source: Chainalysis</span>'
    },
    title: {
        text: 'Intersection of Illicit Cryptocurrency Sources and Authorised Push Payment Scams, 2022',
        align: 'left'
    },
    exporting: {
        enabled: false
    },
    chart:{
        backgroundColor:'#efeff0ce'
    }
});
