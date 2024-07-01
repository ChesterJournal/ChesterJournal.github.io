fetch('https://github.com/ChesterJournal/ChesterJournal.github.io/blob/main/2024_GE_MRP_Poll_Visualization/series_data.json')
            .then(response => response.json())
            .then(seriesData => {
                Highcharts.chart('container', {
                    chart: {
                        type: 'packedbubble',
                        height: '100%'
                    },
                    title: {
                        text: '2024 GE Winner Parties Packed Bubble Chart from YouGov MPR Poll',
                        align: 'center'
                    },
                    tooltip: {
                        useHTML: true,
                        pointFormat: '<b>Winner margin</b> <br><b>{point.name}:</b> {point.value:.1f}%'
                    },
                    plotOptions: {
                        packedbubble: {
                            minSize: '20%',
                            maxSize: '100%',
                            zMin: 0,
                            zMax: 100,
                            layoutAlgorithm: {
                                gravitationalConstant: 0.05,
                                splitSeries: true,
                                seriesInteraction: false,
                                dragBetweenSeries: true,
                                parentNodeLimit: true
                            },
                            dataLabels: {
                                enabled: false
                            }
                        }
                    },
                    series: seriesData
                });
            })
            .catch(error => console.error('Error loading JSON data:', error));
