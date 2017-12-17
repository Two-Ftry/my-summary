/**
 * Created by jfhuang on 17/12/15.
 */

import { initChart } from './util';

const pathSymbols = {
    book2: 'path://M800 64l-192 0c-52.48 0-98.56 25.6-128 65.28C450.56 89.6 404.48 64 352 64l-192 0C106.88 64 64 106.88 64 160l0 512C64 725.12 106.88 768 160 768l192 0C405.12 768 448 810.88 448 864 448 881.92 462.08 896 480 896 497.92 896 512 881.92 512 864 512 810.88 554.88 768 608 768l192 0c53.12 0 96-42.88 96-96l0-512C896 106.88 853.12 64 800 64zM448 736C421.12 716.16 387.84 704 352 704l-192 0C142.08 704 128 689.92 128 672l0-512C128 142.08 142.08 128 160 128l192 0C405.12 128 448 170.88 448 224L448 736zM832 672c0 17.92-14.08 32-32 32l-192 0c-35.84 0-69.12 12.16-96 32l0-512C512 170.88 554.88 128 608 128l192 0C817.92 128 832 142.08 832 160L832 672z',
    book3: 'path://M859.149465 158.161183c-15.844873 0-28.737508 12.882402-28.737508 28.737508v696.625927c0 9.759271-7.938809 17.708314-17.708314 17.708314H257.730922c-35.372625 0-64.142879-28.78151-64.142879-64.154135 0-35.372625 28.770254-64.154135 64.142879-64.154136h417.971464c41.459251 0 75.184353-33.713846 75.184353-75.162863V140.452869c0-41.447994-33.725102-75.162864-75.184353-75.162864h-464.417285c-41.447994 0-75.173097 33.713846-75.173097 75.162864v696.625928c0 67.062372 54.556547 121.630175 121.618918 121.630174H812.703643c41.459251 0 75.184353-33.736359 75.184353-75.184353v-696.625927c0-15.855106-12.893658-28.737508-28.738531-28.737508z m-665.561422-17.708314c0-9.759271 7.938809-17.708314 17.697058-17.708314h464.417285c9.769504 0 17.708314 7.949043 17.708314 17.708314v557.309952c0 9.759271-7.938809 17.708314-17.708314 17.708314H257.730922c-22.932292 0-44.89449 6.290263-64.142879 18.311041V140.452869z'
};

const labelSetting = {
    normal: {
        show: true,
        position: 'right',
        offset: [0, -5],
        textStyle: {
            fontSize: 12
        },
        // formatter (val) {
        //     return val.seriesName + ':' + val.data.value;
        // }
    }
};


export default (el) => {

    const chartOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true,
            left: 20
        },
        yAxis: {
            data: ['技术书籍', '其他书籍'],
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                margin: 30,
                textStyle: {
                    fontSize: 14
                }
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30
                }
            }
        },
        xAxis: {
            splitLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            axisLine: {show: false}
        },
        series: [{
            name: '看过',
            type: 'pictorialBar',
            label: labelSetting,
            symbolRepeat: true,
            // symbolSize: ['60%', '60%'],
            barCategoryGap: '40%',
            data: [{
                value: 10,
                symbol: pathSymbols.book2
            }, {
                value: 20,
                symbol: pathSymbols.book2
            }]
        }, {
            name: '忘记',
            type: 'pictorialBar',
            barGap: '10%',
            label: labelSetting,
            symbolRepeat: true,
            // symbolSize: ['60%', '60%'],
            data: [{
                value: 10,
                symbol: pathSymbols.book3
            }, {
                value: 20,
                symbol: pathSymbols.book3
            }]
        }]
    };

    return initChart(el, chartOption);
}