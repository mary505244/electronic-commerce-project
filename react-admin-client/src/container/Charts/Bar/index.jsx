
import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartsBar = () => {
  const option = {
    title: {
      text: 'ECharts 入門示例'
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
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400 }}
    opts={{ renderer: 'svg' }}
  />;
};

export default ChartsBar;