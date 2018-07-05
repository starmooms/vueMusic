import { createSong } from "./song";

const _normalizeSongs = (v) =>{
    let ret = [];
    v.forEach(item => {
        if(item.songid && item.albummid){
            ret.push(createSong(item)) //创建歌曲对象
        }
    })
    return ret
}

export { _normalizeSongs }