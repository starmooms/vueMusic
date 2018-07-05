import axios from 'axios';
import jsonp from '../js/jsonp';

// ？？？ jsonp url添加
const commonParams = {
    // g_tk: 5381,
    // inCharset: 'utf-8',
    // outCharset: 'utf-8',
    // notice: 0,
    // format: 'jsonp'
}

//jsonp 调用参数
const options = {
    param: 'jsonpCallback',  //jsonp回调函数名查询
    // prefix: 'tan'    //前缀用于处理jsonp响应的全局回调函数
}

// 获取banner
export const getBanner = () => {
    let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    let data = Object.assign({}, commonParams , {
        // platform: 'h5',
        // uin: 0,
        // needNewCode: 1
    })
    return jsonp(url,data,options)
}

//获取推荐列表
export const getDiscList = () =>{
    const url = '/api/getDiscList'
    const data = {
        g_tk: 5381,
        notice: 0,
        inCharset: 'utf8',
        outCharset: 'utf-8',
        platform: 'yqq',
        hostUin: 0,
        sin: 0,    //获取列表开始
        ein: 29,   //获取列表结束
        sortId: 5,
        categoryId: 10000000,
        needNewCode: 2,
        rnd: Math.random(),
        format: 'json'
    }

    return axios.get(url,{
        params: data
    }).then(res =>{
        return Promise.resolve(res.data)
    }).catch(err =>{
        console.log("error 获取推荐列表失败 获取静态json数据")

        let mode = () => import(/* webpackChunkName: "recommend_json" */'../json/recommendData');

        return mode().then(res =>{
            let data = res.recommendData.data
            return Promise.reject(data)
        })
        
    })
}

export const getSongList = (disstid) =>{
    const url = '/api/getSongList'

    const data = Object.assign({},commonParams,{
        disstid,
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0
    })

    return axios.get(url, {
        params: data
    }).then((res) => {
        return Promise.resolve(res.data)
    }).catch((err) => {
        console.log('err 获取歌曲列表失败')
        let getData = () => import(/* webpackChunkName:"songList_json" */'../json/songListData')
        return getData().then(res => {
            return Promise.resolve(res.default)
        })
    })
}

