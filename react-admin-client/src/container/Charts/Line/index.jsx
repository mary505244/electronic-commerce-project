import React from 'react';
import ReactECharts from 'echarts-for-react';
import "echarts/i18n/langFR";

const ChartsLine = () => {
  const option = {
    color:["#d67495"],
    title: {
      text: '每月營業額報告',
      textStyle: {
        fontSize: '25px',
        color:'#94516b'
      },
      x:'center'
    },
    toolbox: {
        feature: {
            saveAsImage: {},
            dataZoom: {},
            restore: {}
        }
    },
    tooltip: {},
    legend: {
      left: 'left',
      data:['每月營收']
    },
    xAxis: {
      data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {},
    series: [{
      name: '每月營收',
      type: 'line',
      data: [180000, 220000, 160000, 250000, 350000, 400000, 300000, 500000, 600000, 550000 ,700000, 1000000]  
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400, width:1000, backgroundColor:'#f5dae4',borderRadius:'10px'}}
    opts={{ locale: 'FR' }}
  />;
};

export default ChartsLine;