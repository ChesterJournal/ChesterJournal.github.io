Highcharts.chart('container-pie', {
  chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      },
      backgroundColor:'#efeff0ce',
  },
  title: {
      text: 'Breakdown of Financial Fraud Losses in the UK: Percentage Distribution by Type in 2022',
      align: 'left'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://www.ukfinance.org.uk/system/files/2023-05/Annual%20Fraud%20Report%202023_0.pdf"' +
          'target="_blank">UK Finance</a>',
      align: 'left'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>£{point.y:.1f}m</b> ({point.percentage:.1f}%)'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },
  exporting: {
        enabled: false
    },
  series: [{
      type: 'pie',
      name: 'Value',
      data: [
          ['Payment card', 556.3],
          ['Remote Banking', 163.1],
          {
              name: 'Authorised Push Payment',
              y: 485.2,
              sliced: true,
              selected: true
          },
          ['Cheque', 7.5]
          
      ]
  }]
});
