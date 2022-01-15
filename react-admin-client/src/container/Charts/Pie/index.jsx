import React from 'react';
import ReactECharts from 'echarts-for-react';

const ChartsPie = () => {
  const option = {
    color:["#d65882","#d67495","#d98da6","#d9a3b4", "#d9bac4"],
    title : {
      text: '網站流量管道分析',
      textStyle: {
        fontSize: '25px',
        color:'#94516b'
      },
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} : {b} <br/> {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      itemGap: 20,
      left: 'left',
      data: ['自然搜尋流量 (Organic Search)',
      '直接流量 (Direct)',
      '參照推薦連結 (Referral)',
      '社交媒體 (Social)',
      '付費關鍵字廣告 (Paid Search)' 
     ]
    },
    series : [
      {
      name: '訪問來源',
      type: 'pie',
      radius : '65%',
      center: ['50%', '60%'],
      data:[ 
        {value:1548, name:'自然搜尋流量 (Organic Search)'},
        {value:335, name:'直接流量 (Direct)'},
        {value:310, name:'參照推薦連結 (Referral)'},
        {value:234, name:'社交媒體 (Social)'},
        {value:135, name:'付費關鍵字廣告 (Paid Search)',label:'1232'},
      ],
      itemStyle: {
        emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      }
    ]
  };

//   const [count, setCount] = useState(0);

//   function onChartReady(echarts) {
//     console.log('echarts is ready', echarts);
//   }

//   function onChartClick(param, echarts) {
//     console.log(param, echarts);
//     setCount(count + 1);

//   };

//   function onChartLegendselectchanged(param, echarts) {
//     console.log(param, echarts);
//   };

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 400, backgroundColor:'#f5dae4' ,borderRadius:'10px'}}
        // onChartReady={onChartReady}
        // onEvents={{
        //   'click': onChartClick,
        //   'legendselectchanged': onChartLegendselectchanged
        //  }}
      />
      {/* <div>Click Count: {count}</div>
      <div>Open console, see the log detail.</div> */}
    </>
  );
};

export default ChartsPie;