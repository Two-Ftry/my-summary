/**
 * 关系图
 * Created by jfhuang on 17/12/13.
 */

import { initChart } from './util';

export default (el) => {
    const chartOption = {
        title: {
            text: ''
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        label: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12
                },
            }
        },
        legend: {
            x: "center",
            show: false,
            data: ["朋友", "战友", '亲戚']
        },
        series: [

            {
                type: 'graph',
                layout: 'force',
                symbolSize: 45,
                focusNodeAdjacency: true,
                roam: true,
                categories: [{
                    name: 'r1',
                    itemStyle: {
                        normal: {
                            color: "green",
                        }
                    }
                }, {
                    name: 'r2',
                    itemStyle: {
                        normal: {
                            color: "yellow",
                        }
                    }
                }, {
                    name: 'r3',
                    itemStyle: {
                        normal: {
                            color: "#3592F",
                        }
                    }
                }],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 12
                        },
                    }
                },
                force: {
                    repulsion: 1000
                },
                edgeSymbolSize: [4, 50],
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 10
                        },
                        formatter: "{c}"
                    }
                },
                data: [{
                    name: '黄剑枫',
                    draggable: true,
                }, {
                    name: '001',
                    category: 0,
                    draggable: true,
                }, {
                    name: '002',
                    category: 0,
                    draggable: true,
                }, {
                    name: '003',
                    category: 1,
                    draggable: true,
                }, {
                    name: '004',
                    category: 2,
                    draggable: true,
                }, {
                    name: '005',
                    category: 2,
                    draggable: true,
                }
                ],
                links: [{
                    source: 0,
                    target: 1,
                    category: 0,
                    value: ''
                }, {
                    source: 0,
                    target: 2,
                    value: ''
                }, {
                    source: 0,
                    target: 3,
                    value: ''
                }, {
                    source: 0,
                    target: 4,
                    value: ''
                },{
                    source: 0,
                    target: 5,
                    value: ''
                }
                ],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 1,
                        curveness: 0
                    }
                }
            }
        ]
    };

    return initChart(el, chartOption);
};