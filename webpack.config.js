/**
 * Created by jfhuang on 17/12/11.
 */

module.exports = {
    entry: {
        app: './app.js',
        app2: './app2.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: __dirname + '/dist'
    }
}