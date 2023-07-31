
// added script to play audio embedded in the index

function play() {
    var audio = document.getElementById("audio");
    audio.play();
    audio.volume = 0.2;
}

// LINE CHART

// initialize echarts instance
var myChart = echarts.init(document.getElementById('house-price-to-income-chart'));

// define chart options
var option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['House price growth (London)', 'Median Income Growth (London)'],
        orient: 'vertical',
        right: 5,
        top:20
    },
    xAxis: {
        type: 'category',
        data: ['2003-09-01', '2004-09-01', '2005-09-01', '2006-09-01', '2007-09-01', '2008-09-01', '2009-09-01', '2010-09-01', '2011-09-01', '2012-09-01', '2013-09-01', '2014-09-01', '2015-09-01', '2016-09-01', '2017-09-01', '2018-09-01', '2019-09-01', '2020-09-01', '2021-09-01', '2022-09-01'],
        axisLine: {
            lineStyle: {
              color: 'black'
            }
          }
    },
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value}%'
            },
            right: 50,
            axisLine: {
                lineStyle: {
                  color: 'black'
                }
              }

        }
    ],
    series: [
        {
            name: 'House price growth (London)',
            type: 'line',
            data: [14, 26, 33, 40, 47, 56, 47, 67, 74, 76, 88, 107, 128, 153, 165, 169, 168, 179, 200, 209],
            yAxisIndex: 0
        },
        {
            name: 'Median Income Growth (London)',
            type: 'line',
            data: [3.83, 7.18, 11.66, 13.62, 18.25, 23.23, 26.57, 26.82, 26.22, 28.83, 29.78, 29.85, 31.20, 33.52, 37.61, 41.48, 46.03, 52.67, 49.14, 56.10],
            yAxisIndex: 0
        }
    ],
    backgroundColor: 'rgba(255, 255, 255, 0.7)'

};

// set chart options
myChart.setOption(option);




// AREA CHART

var chart = echarts.init(document.getElementById('stack-chart'));

var data = [
    [2002, 6.74, 4.92],
    [2003, 7.40, 5.81],
    [2004, 7.95, 6.46],
    [2005, 8.00, 6.65],
    [2006, 8.32, 6.92],
    [2007, 8.38, 7.14],
    [2008, 8.52, 6.93],
    [2009, 7.83, 6.41],
    [2010, 8.87, 6.89],
    [2011, 9.26, 6.79],
    [2012, 9.23, 6.71],
    [2013, 9.77, 6.72],
    [2014, 10.72, 6.95],
    [2015, 11.69, 7.33],
    [2016, 12.76, 7.54],
    [2017, 12.96, 7.74],
    [2018, 12.81, 7.71],
    [2019, 12.35, 7.59],
    [2020, 12.33, 7.61],
    [2021, 13.55, 8.90],
    [2022, 13.33, 8.28]
];

var option = {
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['London', 'England'],
        bottom: 'bottom'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(function (item) {
            return item[0];
        })
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'London',
            type: 'line',
            label: {
                show: true
            },
            areaStyle: {},
            data: data.map(function (item) {
                return item[1];
            })
        },
        {
            name: 'England',
            type: 'line',
            label: {
                show: true
            },
            areaStyle: {},
            data: data.map(function (item) {
                return item[2];
            })
        }
    ],
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
};

chart.setOption(option);


// MIXED LINE AND BAR CHART


var chart = echarts.init(document.getElementById('mixed-chart'));

var data = [    [2003, 9.79, -6.67],
    [2004, 17.95, 0.00],
    [2005, 18.69, 50.00],
    [2006, 23.44, 19.05],
    [2007, 24.33, -4.00],
    [2008, 26.41, 45.83],
    [2009, 16.17, -42.86],
    [2010, 31.60, 25.00],
    [2011, 37.39, 52.00],
    [2012, 36.94, -31.58],
    [2013, 44.96, -11.54],
    [2014, 59.05, -34.78],
    [2015, 73.44, -73.33],
    [2016, 89.32, 150.00],
    [2017, 92.28, 160.00],
    [2018, 90.06, -11.54],
    [2019, 83.23, -26.09],
    [2020, 82.94, -41.18],
    [2021, 101.04, 150.00],
    [2022, 97.77, 216.00]
];

var option = {
    tooltip: {
        trigger: 'axis',
        
    },
    legend: {
        data: ['London housing affordability (%)', 'Inflation increase (%)'],
        bottom: 'bottom'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(function (item) {
            return item[0];
        })
    },
    yAxis: [
        {
            type: 'value',
            min: -100,
            max: 300,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name: 'London housing affordability (%)',
            type: 'line',
            data: data.map(function (item) {
                return item[1];
            }),
            
        },
        {
            name: 'Inflation increase (%)',
            type: 'bar',
            data: data.map(function (item) {
                return item[2];
            })
        }
    ],
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
};

chart.setOption(option);