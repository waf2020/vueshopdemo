const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin=require('vue-loader/lib/plugin')
//导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js 并读取这个文件中的配置对象
//来进行打包处理
module.exports={
    //配置打包模式为开发模式
       mode:'development',
      //项目的入口文件
       entry:path.join(__dirname,'src/main.js'),
        output:{//配置输出选项
           path:path.join(__dirname,'dist'),//配置输出路径
            filename: "bundle.js" //配置输出的文件名
        },
    devServer:{
           port:3000,
           open:true,
           contentBase:'src',
           hot:true
    },
    module:{
        rules: [
            {test:/.css$/,use:['style-loader','css-loader','less-loader']},
            {test:/.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/.(jpg|jpeg|png|gif)$/,use:['url-loader']},
            {test: /.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader']},
            {test:/.js$/,use:['babel-loader'],exclude:/node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },

    plugins: [
        new vueLoaderPlugin()/*,
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html"
        })*/
    ],
    resolve: {

        alias: {"vue$":"vue/dist/vue.js"}

    }

};