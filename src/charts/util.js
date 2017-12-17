/**
 * Created by jfhuang on 17/12/14.
 */
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/tooltip');
require('echarts/lib/chart/graph');
require('echarts/lib/chart/pictorialBar');

    // const echarts = require('echarts');

export const initChart = (el, option) => {
    const chart = echarts.init(el);
    chart.setOption(option);
    return chart;
};