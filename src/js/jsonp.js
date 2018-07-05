import originJSOP from 'jsonp'; //jsop

//用于拼接url参数
const param = data =>{
    let url = "";
    for(let key in data){
        let val = data[key] ? data[key] : '';
        url += `&${key}=${encodeURIComponent(val)}`
    }
    //subtring 去掉第一个&  这个&已在url是否含有?时添加
    return url ? url.substring(1) : '';
}



//封装jsonp 返回一个promise
//url为地址  data为拼接url参数  options为post参数
export default function jsonp(url,data,option){
    //get的url拼接
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);
    return new Promise((resolve,reject) => {
        originJSOP(url,option,(err,data) => {
            if(!err){
                resolve(data)
            } else {
              reject(err)
            }
        })
    })
}