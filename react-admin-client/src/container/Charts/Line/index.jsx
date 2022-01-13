import React from 'react';
import ReactECharts from 'echarts-for-react';

import "echarts/i18n/langFR";

const ChartsLine = () => {
  const option = {
    title: {
      text: 'ECharts 入門示例'
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
      data:['銷量']
    },
    xAxis: {
      data: ['襯衫', '羊毛衫', '雪紡衫', '褲子', '高跟鞋', '襪子']
    },
    yAxis: {},
    series: [{
      name: '銷量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    opts={{ locale: 'FR' }}
  />;
};

export default ChartsLine;