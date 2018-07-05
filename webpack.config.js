const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const hotMiddlewareScript = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`;  //webpack-hot-middleware配置




// 设置devServer 为ip地址
const os = require('os');
let localUrl = "localhost"; //默认为localhost dev启动函数改变
const devport = "8091";
const devServerUrl = () =>{
    try{
        let ifaces = os.networkInterfaces();
        for(let dev in ifaces){
            if(dev != "Loopback Pseudo-Interface 1"){  //判断条件？？？
                ifaces[dev].forEach((details,alias)=>{
                    if(details.family == 'IPv4'){
                        localUrl = details.address
                        return false;
                    }
                })
            }
        }
    } catch(e) {
        localUrl = 'localhost';
    }
    console.log(`--------------http://${localUrl}:${devport}/`);
}


module.exports = (env,argv) => {
    console.log(argv.mode+"!!!!");

    const dev = argv.mode === "development"?true:false;
    const publicPath = dev?"/":"/dist/";
    dev?devServerUrl():null; //设置端口号
 
    const config = {
        mode : argv.mode,
        entry : {
            main : dev ? ["./src/main.js",hotMiddlewareScript] :"./src/main.js",
        },
        output : {
            filename : "[name].js",
            chunkFilename : "[name].chunk.js",
            publicPath : publicPath,
            path : path.resolve(__dirname,'dist')
        },
        devtool:'source-map',
        devServer : {
            compress : true,
            clientLogLevel : 'none',  //控制台更新消息
            historyApiFallback : true,
            noInfo : false,       //启动时打包模块的信息
            inline : true,
            hot : true,
            open : false,
            inline : true,
            host : localUrl,
            port : devport,
            // proxy:{ //只会更换当前服务器路径！！！
            //     '/api/*':{
            //         target: 'http://localhost:2000',
            //     }
            // }
        },
        optimization:{
            runtimeChunk:{
                name:'mainfest'
            },
            splitChunks:{
                cacheGroups:{
                    vendors:{
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'initial',
                        priority: 11,
                    },
                    vue:{
                        name:'vue',
                        test:/vue\.js$/,
                        chunks:'all',
                        enforce:true
                    }
                }
            }
        },
        resolve : {
            extensions: ['.js','.vue'],
            alias:{
                'Less': path.resolve(__dirname,'src/less'),
                'image': path.resolve(__dirname,'src/image')
            }
        },
        module : {
            rules : [
                {
                    test : /\.css$/,
                    use : [
                        miniCssExtractPlugin.loader,
                        {loader:'css-loader',options:{minimize:!dev,sourceMap:dev,importLoaders:1}},
                        'postcss-loader'
                    ]
                },
                {
                    test : /\.less$/,
                    use : [
                        'style-loader',
                        {loader:'css-loader',options:{minimize:!dev,sourceMap:dev,importLoaders:3}},
                        'postcss-loader',
                        {loader:'less-loader',options:{sourceMap:dev}},
                        {loader:'sass-resources-loader',options:{
                            resources:'./src/less/variable.less'
                        }}
                    ]
                },
                {
                    test : /\.(jpg|png|svg|gif)$/,
                    loader : 'url-loader',
                    options : {
                        limit : 1024,
                        name : 'image/[hash].[ext]'
                    }
                },
                {
                    test : /\.js$/,
                    include : path.resolve(__dirname,'src'),
                    loader : 'babel-loader',
                },
                {
                    test : /\.vue$/,
                    loader : 'vue-loader',
                    options : {sourceMap:true}
                }
            ]
        },
        plugins : [
            new VueLoaderPlugin(),
            new miniCssExtractPlugin({
            　　filename: "css/[name]-[contenthash:8].css"
            }),
            new htmlWebpackPlugin({
                filename : dev ? "index.html" : path.resolve(__dirname,'index.html'),
                title : "Music Demo",
                template : "./src/template.html"
            })
        ]
    }

    if(!dev){
        let buildPlugins = [
            new cleanWebpackPlugin(['dist','./index.html']),
        ]
        config.output.filename = "js/[name]-[chunkhash:8].js"
        config.output.chunkFilename = "js/[name]-[chunkhash:8].js"
        config.devtool = "none"
        config.plugins.push(...buildPlugins);
    }else{
        let devPlugins = [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(), //webpack-hot-middleware 热更新配置
            new webpack.optimize.OccurrenceOrderPlugin(), //webpack-hot-middleware 热更新配置
        ]
        config.plugins.push(...devPlugins);
        
    }

    return config;
}

//npm i -D webpack webpack-cli webpack-dev-server less less-loader css-loader file-loader url-loader html-webpack-plugin postcss-loader
// style-loader vue-loader vue-template-compiler vuex clean-webpack-plugin postcss-loader autoprefixer
//babel-core babel-loader //基本包
//babel-preset-env babel-preset-stage-2 //转换语法规则
//babel-plugin-transform-runtime  //添加新api
//babel-plugin-syntax-dynamic-import  //异步加载调用
//npm i --save babel-runtime es6-promise vue    