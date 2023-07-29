// Set up the chart
const chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container-column',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        },
        backgroundColor:'#efeff0ce'
    },
    xAxis: {
        categories: ['Europol operation recovered fund', 'BioCatch research estimation', 'Total funds lost to scam in the UK 2022']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Funds: £{point.y}m'
    },
    title: {
        text: 'Comparative Analysis of Money Mule Transactions and Total Scam Losses in the UK, 2022',
        align: 'left'
    },
    subtitle: {
        text: 'Sources: ' +'<a href="https://www.europol.europa.eu/media-press/newsroom/news/2-469-money-mules-arrested-in-worldwide-crackdown-against-money-laundering"' +
        'target="_blank">Europol, </a>' + '<a href="https://www.biocatch.com/press-release/money-mules-the-3-billion-problem-for-u.s.-banks#:~:text=Applying%20BioCatch%20findings%20to%20the,fraudulent%20transfers%20in%20a%20year"' +
        'target="_blank">BioCatch, </a>' + '<a href="https://www.ukfinance.org.uk/system/files/2023-05/Annual%20Fraud%20Report%202023_0.pdf"' +
        'target="_blank">UK Finance</a>' ,
        align: 'left'
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [15, 550, 1212],
        colorByPoint: true
    }]
});

function showValues() {
    document.getElementById('alpha-value').innerHTML = chart.options.chart.options3d.alpha;
    document.getElementById('beta-value').innerHTML = chart.options.chart.options3d.beta;
    document.getElementById('depth-value').innerHTML = chart.options.chart.options3d.depth;
}

// Activate the sliders
document.querySelectorAll('#sliders input').forEach(input => input.addEventListener('input', e => {
    chart.options.chart.options3d[e.target.id] = parseFloat(e.target.value);
    showValues();
    chart.redraw(false);
}));

showValues();
