import { Base64 } from 'js-base64'  //用于解码歌词

export default class Song {
    constructor({ id,mid,singer,name,album,duration,image,url }){
        this.id = id
        this.mid = mid  //mid 用于获取歌词
        this.singer = singer //歌手
        this.name = name  //歌名
        this.album = album  //唱片名
        this.duration = duration //时长
        this.image = image  //图片地址
        this.url = url    //歌曲地址
    }

    //歌词获取 Promise封装
    getLyric(){
        if(this.lyric) {
            return Promise.resolve(this.lyric)
        }
        return new Promise((resolve,reject)=>{
            resolve('no lyric')
        })
    }
}

//拼接歌手名
const filterSinger = singer => {
    let ret = []
    if(!singer) return ''
    singer.forEach(item => {
        ret.push(item.name)
    })
    return ret.join('/')
}

export const createSong = (musicData) =>{
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        // 歌源url
        // url: `http://thirdparty.gtimg.com/C100${musicData.songmid}.m4a?fromtag=38`
        url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}/${musicData.songid}.m4a?guid=263427534&fromtag=66`
    })
}
