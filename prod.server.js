const express = require('express')
const axios = require('axios')




const app = express()
const apiRoutes = express.Router()
//  抓取qq音乐推荐歌单列表 后端代理 设置headers
apiRoutes.get('/getDiscList',(req,res)=>{
    let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com',
            host: 'c.y.qq.com'
        },
        params:req.query
    }).then((response) =>{
        res.json(response.data)
    }).catch((e) => {
        console.log(e)
    })
})
// 获取歌曲列表
apiRoutes.get('/getSongList',(req,res)=>{
    let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params:req.query
    }).then((response) =>{
        let data = response.data
        // 返回jsonp格式做处理
        if(typeof data === 'string') {
            let reg = /^\w+\(({.+})\)/
            let jsonData = reg.exec(data)
            if(jsonData) {
                data = JSON.parse(jsonData[1])
            }
        }
        res.json(data)
    }).catch((e)=> {
        console.log(e)
    })
})

app.use('/api',apiRoutes)  //设置路由



//开放模式     用cross-env兼容全局环境变量
const dev = process.env.mode == 'development'?true:false; //判断webpack是否开放模式
if(dev){
    const config = require('./webpack.config')
    const webpack = require('webpack');
    const middleware = require('webpack-dev-middleware');     //定制webpack server的插件
    const hotmiddleware = require('webpack-hot-middleware');   //用于热更新

    let cof = config(null,{mode:'development'});
    let compiler = webpack(cof);

    app.use(middleware(compiler,{
        publicPath:cof.output.publicPath,  //发布地址
    }))
    app.use(hotmiddleware(compiler,{
        path: `/__webpack_hmr`,
        noInfo:true,    //信息控制台日志记录。
        quiet:true     //所有控制台日志记录。
    }));

    let host = cof.devServer.host
    let port = cof.devServer.port
    app.listen(port,host,function () {
        console.log(`Listening at http://${host}:${port}\n`)
    });
} else {
    //生成服务端
    app.use(express.static('./'))  //设置目录
    let port = process.env.PORT || 2000

    module.exports = app.listen(port,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Listening at http://localhost:'+port+'\n')
    })
}





// https://blog.csdn.net/zhx6044/article/details/49683335