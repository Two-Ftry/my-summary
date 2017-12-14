/**
 * 入口文件
 * Created by jfhuang on 17/12/13.
 */

import './tools/common'
import createRelationGraph from './charts/relationGraph';
import createGraphBar from './charts/graphBar'
// 关系图
const girlChart = document.getElementById('girl-chart');
createRelationGraph(girlChart);

// 条形图
const bookChart = document.getElementById('book-chart');
createGraphBar(bookChart);
