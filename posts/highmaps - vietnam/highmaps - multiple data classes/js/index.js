Highcharts.mapChart('container', {
  chart: {
    map: 'custom/world',
    borderWidth: 1
  },
  colors: [
    'rgba(19,64,117,0.05)',
    'rgba(19,64,117,0.2)',
    'rgba(19,64,117,0.4)',
    'rgba(19,64,117,0.5)',
    'rgba(19,64,117,0.6)',
    'rgba(19,64,117,0.8)',
    'rgba(19,64,117,1)'
  ],
  title: {
    text: 'Population density by country (/km²)'
  },
  mapNavigation: {
    enabled: true
  },
  legend: {
    title: {
      text: 'Individuals per km²',
      style: {
        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
      }
    },
    align: 'left',
    verticalAlign: 'bottom',
    floating: true,
    layout: 'vertical',
    valueDecimals: 0,
    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
    symbolRadius: 0,
    symbolHeight: 14
  },
  colorAxis: {
    dataClasses: [
      {
        to: 3
      },
      {
        from: 3,
        to: 10
      },
      {
        from: 10,
        to: 30
      },
      {
        from: 30,
        to: 100
      },
      {
        from: 100,
        to: 300
      },
      {
        from: 300,
        to: 1000
      },
      {
        from: 1000
      }
    ]
  },
  series: [{
    data: data,
    joinBy: ['iso-a3', 'code'],
    animation: true,
    name: 'Population density',
    states: {
      hover: {
        color: '#a4edba'
      }
    },
    tooltip: {
      valueSuffix: '/km²'
    },
    shadow: false
  }]
});