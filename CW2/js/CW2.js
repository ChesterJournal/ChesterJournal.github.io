// Histogram of tweeters volumes
var chart = c3.generate({
  bindto: '#tweeterVolume',
  size: {
      height: 400,
      width: 700
  },
  data: {
      columns: [
          ['100 times', 1],
          ['50-100 times', 8],
          ['10-50 times', 263],
          ['5-10 times', 469],
          ['2-5 times', 1676],
          ['1 time', 5516],
      ],
      type: 'bar'
  },
  axis: {
      x: {
          type: 'category',
          categories: ['Volumes','100 times', '50-100 times', '10-50 times', '5-10 times', '2-5 times', '1 time']
      },
      y: {
          label: 'Number of tweeters'
      }
  },
  interaction: {
      enabled: true
  },
  legend: {
      show: true,
      position: 'right',
      inset: {
          anchor: 'top-left',
          x: 10,
          y: 10,
          step: 1
      },
      title: 'volumes'
  },
  title: {
      text: 'Histogram of tweeters volumes'
  },
  bar: {
      width: {
          ratio: 0.8
      }
  }
});



// Timeseries for all the tweets
var chart = c3.generate({
    bindto: '#timeSeries',
    title:{text:"Timeseries for all collected tweets"},
    data: {
      columns: [
        ['Time', '1/9 11:00', '1/9 12:00', '1/9 13:00', '1/9 14:00', '1/9 15:00', '1/9 16:00', '1/9 17:00', '1/9 18:00', '1/9 19:00', '1/9 20:00', '1/9 21:00', '1/9 22:00', '1/9 23:00', '1/10 00:00', '1/10 01:00', '1/10 02:00', '1/10 03:00', '1/10 04:00', '1/10 05:00', '1/10 06:00', '1/10 07:00', '1/10 08:00', '1/10 09:00', '1/10 10:00', '1/10 11:00', '1/10 12:00', '1/10 13:00', '1/10 14:00', '1/10 15:00', '1/10 16:00', '1/10 17:00', '1/10 18:00', '1/10 19:00', '1/10 20:00', '1/10 21:00'],
        ['Tweets', 42, 460, 455, 430, 483, 487, 571, 546, 511, 570, 484, 510, 383, 366, 275, 271, 191, 184, 199, 200, 221, 250, 234, 260, 381, 573, 681, 691, 663, 1030, 1262, 1162, 1075, 900, 806],
    ],
    type: 'line',
    
    },legend: {
        hide:['Time']},
    axis: {
        x: {
            type: 'category',
            categories: ['1/9 11:00', '1/9 12:00', '1/9 13:00', '1/9 14:00', '1/9 15:00', '1/9 16:00', '1/9 17:00', '1/9 18:00', '1/9 19:00', '1/9 20:00', '1/9 21:00', '1/9 22:00', '1/9 23:00', '1/10 00:00', '1/10 01:00', '1/10 02:00', '1/10 03:00', '1/10 04:00', '1/10 05:00', '1/10 06:00', '1/10 07:00', '1/10 08:00', '1/10 09:00', '1/10 10:00', '1/10 11:00', '1/10 12:00', '1/10 13:00', '1/10 14:00', '1/10 15:00', '1/10 16:00', '1/10 17:00', '1/10 18:00', '1/10 19:00', '1/10 20:00', '1/10 21:00'],
            tick:{count: 5, 
                multiline: true, // (optional) to allow labels to take multiple lines if needed
                width: 30, // (required) set the width of the labels
                fit:true
            }
        }
        
    }
  });

// Stacked bar chart for top tweeters
var chart = c3.generate({
    bindto:"#retweetTweetRate",
    title:{text:"Top tweeters"},
    data: {
      columns: [
        ["Tweet", 0, 64, 1, 0, 11, 0, 0, 0, 7, 2],
        ["Retweet", 109, 26, 57, 56, 44, 55, 53, 53, 43, 46]
      ],
      type: 'bar',
      groups: [
        ["Tweet", "Retweet"]
      ]
    },
    axis: {
        rotated:true,
      x: {
        type: 'category',
        categories: ["YvonneD16015247", "brewerelac", "abgweth", "DadakeTina", "TatuTHIRD3", "Patrici81460203", "WeezYbloomix", "Hannah_786_sa", "soletiole2912", "Sil31966396"]
      }
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    grid: {
      y: {
        lines: [{value:0}]
      }
    },
    padding: {
      bottom: 0
    }
  });

// Retweet versus original tweet rate
var chart = c3.generate({
    bindto: '#rtToOtRate',
    title:{text:"Retweet versus original tweet rate"},
    data: {
      columns: [
        ['Time', '1/9 11:00', '1/9 12:00', '1/9 13:00', '1/9 14:00', '1/9 15:00', '1/9 16:00', '1/9 17:00', '1/9 18:00', '1/9 19:00', '1/9 20:00', '1/9 21:00', '1/9 22:00', '1/9 23:00', '1/10 00:00', '1/10 01:00', '1/10 02:00', '1/10 03:00', '1/10 04:00', '1/10 05:00', '1/10 06:00', '1/10 07:00', '1/10 08:00', '1/10 09:00', '1/10 10:00', '1/10 11:00', '1/10 12:00', '1/10 13:00', '1/10 14:00', '1/10 15:00', '1/10 16:00', '1/10 17:00', '1/10 18:00', '1/10 19:00', '1/10 20:00', '1/10 21:00'],
        ['Original tweets', 6, 56, 62, 75, 79, 66, 69, 78, 88, 83, 71, 79, 60, 48, 42, 49, 14, 20, 70, 29, 25, 59, 35, 68, 125, 103, 210, 201, 205, 482, 375, 316, 154, 160, 168],
        ['Retweet',36, 404, 393, 355, 404, 421, 502, 468, 423, 487, 413, 431, 323, 318, 233, 222, 177, 164, 129, 171, 196, 191, 199, 192, 256, 470, 471, 490, 458, 548, 887, 846, 921, 740, 638]
    ],
    type: 'line',
    
    },legend: {
        hide:['Time']},
    axis: {
        x: {
            type: 'category',
            categories: ['1/9 11:00', '1/9 12:00', '1/9 13:00', '1/9 14:00', '1/9 15:00', '1/9 16:00', '1/9 17:00', '1/9 18:00', '1/9 19:00', '1/9 20:00', '1/9 21:00', '1/9 22:00', '1/9 23:00', '1/10 00:00', '1/10 01:00', '1/10 02:00', '1/10 03:00', '1/10 04:00', '1/10 05:00', '1/10 06:00', '1/10 07:00', '1/10 08:00', '1/10 09:00', '1/10 10:00', '1/10 11:00', '1/10 12:00', '1/10 13:00', '1/10 14:00', '1/10 15:00', '1/10 16:00', '1/10 17:00', '1/10 18:00', '1/10 19:00', '1/10 20:00', '1/10 21:00'],
            tick:{count: 5, 
                multiline: true, // (optional) to allow labels to take multiple lines if needed
                width: 30, // (required) set the width of the labels
                fit:true
            }
        }
        
    }
  });

// Original tweet to retweet pie chart
var chart = c3.generate({
    bindto: '#rtToOtPie',
    title:{text:"Original tweet to retweet"},
    data: {
    columns: [
    ['Original tweet', 21.50],
    ['Retweet', 78.50],
    ],
    type : 'pie',
    }
    });

// Bot or not table
var table = c3.generate({
    bindto: '#botOrNot',
    data: {
        columns: [
            ['USERNAME', '@YvonneD16015247', '@brewerelac', '@abgweth', '@DadakeTina', '@TatuTHIRD3', '@Patrici81460203', '@Hannah_786_sa', '@WeezYbloomix', '@soletiole2912', '@Sil31966396'],
            ['TOTAL TWEET COUNT', 109, 90, 58, 56, 55, 55, 53, 53, 50, 48],
            ['BOTOMETER', '2/5', '0.8/5', '1.4/5', '1.8/5', '0.6/5', '1.4/5', '3.5/5', '2.3/5', '1.4/5', '1.6/5'],
            ['JOIN TIME', 'Dec-22', 'Nov-08', 'Oct-19', 'Jul-12', 'Jan-20', 'Mar-22', 'May-21', 'Oct-21', 'Oct-19', 'Oct-21'],
            ['TWEETS PER DAY', 24.9, 1.777520725, 210.4437968, 70.89659652, 21.24797115, 16.97805643, 355.0898876, 170.8234043, 235.3588676, 78.5787234],
            ['HISTORY TWEET COUNT', 996, 9220, 252743, 272881, 23564, 5416, 222221, 80287, 282666, 36932],
            ['LIKE/TWEET RATE', 0.54, 0.99, 0.89, 1.41, 7.36, 1.08, 1.02, 0.59, 0.96, 3.57]
        ],
        type: 'table'
    },
    table: {
        show: true,
        width: {
            ratio: 1
        }
    }
});

// Location pie chart
var chart = c3.generate({
  bindto: '#locationPie',
  title:{text:"Tweeter location"},
  data: {
      columns: [
          ['With Location', 9426],
          ['No location', 8381],
      ],
      type: 'pie',
  },
  title: {
      text: 'Tweet Location'
  }
});


// JS Word cloud

d3.csv(".HTML/js/WordCloudfile.csv", function(data) {
    var words = data.map(function(d) {
        return {
            text: d.word,
            size: d.count
        };
    });
    d3.layout.cloud().size([500, 500])
        .words(words)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();
});

function draw(words) {
    d3.select("#wordCloud").append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .append("g")
        .attr("transform", "translate(250,250)")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}
