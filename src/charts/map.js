/**
 * Created by jfhuang on 17/12/17.
 */
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/geo');
require('echarts/lib/chart/map');
require('echarts/lib/component/dataZoom');
require('echarts/lib/chart/effectScatter');

import { initChart } from './util';
import geoCoordMap from './geoCoordMap';

let isRegister = false;

/**
 * 数据和城市的经纬坐标结合起来
 * @param {*} data
 */
const convertData = (data) => {
    const res = [];
    for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

/**
 * 地图+散点图，获取需要的数据格式
 */
const generateData = (cities, data) => {
    const r = cities.map((item, index) => {
        return {
            name: item,
            value: data[index],
            selected: index === 0
        }
    });
    return r;
};


/**
 * 设置散点图的serie
 */
const createEffectScatterSerie = (data) => {
    return {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort((a, b) => {
            return b.value - a.value;
        }).slice(0, 6)),
        symbolSize (val) {
            const size = parseFloat(val[2]) / 10;
            return size > 12 ? 12 : size;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
                color: '#f00'
            }
        },
        itemStyle: {
            normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }
}

export default (el) => {
    if (!isRegister) {
        const chinaMapJson = require('./china.json');
        echarts.registerMap('china', chinaMapJson);
        isRegister = true;
    }

    const series = [];

    const cities = ['深圳', '广州', '玉林', '南宁', '桂林']
    const citiesData = [9999, 9999, 9999, 9999, 9999];
    const data = generateData(cities, citiesData);
    series.push(createEffectScatterSerie(data));

    const chartOption = {
        geo: {
            map: 'china',
            roam: true,
            // zoom: 3,
            boundingCoords: [
                [110.28, 25.29],
                [112.07, 20.62]
            ],
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3D6CA4',
                    borderWidth: 1.5
                },
                emphasis: {
                    areaColor: 'transparent',
                    borderColor: '#3D6CA4',
                    borderWidth: 1.5
                }
            }
        },
        series
    };

    // console.log('@@@map', JSON.stringify(chartOption))

    return initChart(el, chartOption);

};