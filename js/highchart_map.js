(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/custom/world.topo.json'
    ).then(response => response.json());

    // Prepare demo data. The data is joined to map using value of 'hc-key'
    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['pk', 27], ['in', 40], ['bd', 27], ['kh', 24],['ua', 33], ['la', 31],['th', 36], ['id', 34], ['mm', 23], ['rs', 36], ['ng', 24]        
    ];

    // Create the chart
    Highcharts.mapChart('container-map', {
        chart: {
            map: topology,
            backgroundColor: 'transparent'
        },

        title: {
            text: '2022 Corruption Perception Index: Regions Commonly Associated with Scam Activities',
            style: {
                color: '#FFFFFF', // White color
                textOutline: '1px 1px black' // Black outline
            }
        },

        subtitle: {
            text: '<b>Source map</b>: <a href="https://images.transparencycdn.org/images/Report_CPI2022_English.pdf">Transparency International</a>',
            style: {
                color: '#FFFFFF', // White color
                textOutline: '1px 1px black' // Black outline
            }
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            max:100,
            minColor:'#ff0000',
            maxColor:'#ffe600',
            

        },
        exporting: {
            enabled: false
        },

        series: [{
            data: data,
            name: 'CPI',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            }
        }]
    });

})();
