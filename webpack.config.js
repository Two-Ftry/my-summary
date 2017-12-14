/**
 * Created by jfhuang on 17/12/11.
 */

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: __dirname + '/dist'
    }
}