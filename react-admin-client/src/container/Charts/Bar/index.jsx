
import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartsBar = () => {
  const option = {
    color:["#d91e53","#d66786","#d97c96","#d93060","#d90f48", "#d9577c", "#d98fa4", "#d9436e", "#dba2b2"],
    title: {
      text: '美妝產品每月銷售量',
      textStyle: {
        fontSize: '25px',
        color:'#94516b'
      },
      x:'center'

    },
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c}個品項"
    },
    legend: {
    //   data:['每月銷售量']
    },
    xAxis: {
      data: ['基礎保養', '進階護膚', '防曬', '底妝', '彩妝', '身體保養', 
            '美髮', '香水香氛', '美容工具']
    },
    yAxis: {},
    series: [{
    //   name: '產品月銷量',
      colorBy:'data',
    //   name: '每月銷售量',
      type: 'bar',
      data: [300, 100, 80, 200, 350, 120, 70, 130, 60 ],
      itemStyle: {
        emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return <ReactECharts
    option={option}
    style={{ height: 400, backgroundColor:'#f5dae4' ,borderRadius:'10px'}}
    opts={{ renderer: 'svg' }}
  />;
};

export default ChartsBar;