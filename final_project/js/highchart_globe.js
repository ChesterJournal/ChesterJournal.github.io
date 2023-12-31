const data = [
    
    {
        name: 'Indonesia',
        value: 34
    },
    {
        name:  'Cambodia',
        value: 24
    },
    {
        name: 'Nigeria',
        value: 24
    },
    
    {
        name: 'Vietnam',
        value: 42
    },
    
    {
        name: 'Laos',
        value: 31
    },

    {
        name: 'Myanmar',
        value: 23
    },

    {
        name: 'India',
        value: 40
    },

    {
        name: 'Ukraine',
        value: 33
    },

    {
        name: 'Thailand',
        value: 36
    },

    {
        name: 'Pakistan',
        value: 27
    }
];

const getGraticule = () => {
    const data = [];

    // Meridians
    for (let x = -180; x <= 180; x += 15) {
        data.push({
            geometry: {
                type: 'LineString',
                coordinates: x % 90 === 0 ? [
                    [x, -90],
                    [x, 0],
                    [x, 90]
                ] : [
                    [x, -80],
                    [x, 80]
                ]
            }
        });
    }

    // Latitudes
    for (let y = -90; y <= 90; y += 10) {
        const coordinates = [];
        for (let x = -180; x <= 180; x += 5) {
            coordinates.push([x, y]);
        }
        data.push({
            geometry: {
                type: 'LineString',
                coordinates
            },
            lineWidth: y === 0 ? 2 : undefined
        });
    }

    return data;
};

// Add flight route after initial animation
const afterAnimate = e => {
    const chart = e.target.chart;

    if (!chart.get('flight-route')) {
        chart.addSeries({
            type: 'mapline',
            name: 'Flight route, Amsterdam - Los Angeles',
            animation: false,
            id: 'flight-route',
            data: [{
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [4.90, 53.38], // Amsterdam
                        [-118.24, 34.05] // Los Angeles
                    ]
                },
                color: '#313f77'
            }],
            lineWidth: 2,
            accessibility: {
                exposeAsGroupOnly: true
            }
        }, false);
        chart.addSeries({
            type: 'mappoint',
            animation: false,
            data: [{
                name: 'Amsterdam',
                geometry: {
                    type: 'Point',
                    coordinates: [4.90, 53.38]
                }
            }, {
                name: 'LA',
                geometry: {
                    type: 'Point',
                    coordinates: [-118.24, 34.05]
                }
            }],
            color: '#313f77',
            accessibility: {
                enabled: false
            }
        }, false);
        chart.redraw(false);
    }
};


Highcharts.getJSON(
    'https://code.highcharts.com/mapdata/custom/world.topo.json',
    topology => {

        const chart = Highcharts.mapChart('container', {
            chart: {
                map: topology
            },

            title: {
                text: 'Airport density per country',
                floating: true,
                align: 'left',
                style: {
                    textOutline: '2px white'
                }
            },

            subtitle: {
                text: 'Source: <a href="http://www.citypopulation.de/en/world/bymap/airports/">citypopulation.de</a><br>' +
                    'Click and drag to rotate globe<br>',
                floating: true,
                y: 34,
                align: 'left'
            },

            legend: {
                enabled: false
            },

            mapNavigation: {
                enabled: true,
                enableDoubleClickZoomTo: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            mapView: {
                maxZoom: 30,
                projection: {
                    name: 'Orthographic',
                    rotation: [60, -30]
                }
            },

            colorAxis: {
                tickPixelInterval: 5,
                minColor: '#BFCFAD',
                maxColor: '#31784B',
                max: 1000
            },

            tooltip: {
                pointFormat: '{point.name}: {point.value}'
            },

            plotOptions: {
                series: {
                    animation: {
                        duration: 750
                    },
                    clip: false
                }
            },

            series: [{
                name: 'Graticule',
                id: 'graticule',
                type: 'mapline',
                data: getGraticule(),
                nullColor: 'rgba(0, 0, 0, 0.05)',
                accessibility: {
                    enabled: false
                },
                enableMouseTracking: false
            }, {
                data,
                joinBy: 'name',
                name: 'Airports per million km²',
                states: {
                    hover: {
                        color: '#cf3b34',
                        borderColor: '#cf3b34'
                    }
                },
                dataLabels: {
                    enabled: false,
                    format: '{point.name}'
                },
                events: {
                    afterAnimate
                },
                accessibility: {
                    exposeAsGroupOnly: true
                }
            }]
        });

        // Render a circle filled with a radial gradient behind the globe to
        // make it appear as the sea around the continents
        const renderSea = () => {
            let verb = 'animate';
            if (!chart.sea) {
                chart.sea = chart.renderer
                    .circle()
                    .attr({
                        fill: {
                            radialGradient: {
                                cx: 0.4,
                                cy: 0.4,
                                r: 1
                            },
                            stops: [
                                [0, 'white'],
                                [1, 'lightblue']
                            ]
                        },
                        zIndex: -1
                    })
                    .add(chart.get('graticule').group);
                verb = 'attr';
            }

            const bounds = chart.get('graticule').bounds,
                p1 = chart.mapView.projectedUnitsToPixels({
                    x: bounds.x1,
                    y: bounds.y1
                }),
                p2 = chart.mapView.projectedUnitsToPixels({
                    x: bounds.x2,
                    y: bounds.y2
                });
            chart.sea[verb]({
                cx: (p1.x + p2.x) / 2,
                cy: (p1.y + p2.y) / 2,
                r: Math.min(p2.x - p1.x, p1.y - p2.y) / 2
            });
        };
        renderSea();
        Highcharts.addEvent(chart, 'redraw', renderSea);

    }
);
