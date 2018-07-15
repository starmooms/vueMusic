import Vue from "vue";
import Vuex from "vuex";

import { _normalizeSongs } from "../js/util.js"; //工具函数 用于筛选数据生成song对象

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        disc:"",
        songList: "",
        nowSongList: "", //当前播放列表
        playSongList:[], //播放历史列表
        actSongIndex: false,     //当前播放歌曲
        playing: false,  //是否播放
    },
    getters:{
        actSong(state) { return state.nowSongList[state.actSongIndex] || "" }
    },
    mutations:{
        setDisc(state,disc) { state.disc = disc },
        setSongList(state,list) { state.songList = list },
        setNowSongList(state,list) { state.nowSongList = list },
        setPlaySongList(state,song) { state.playSongList.push(song)},
        setActSongIndex(state,index) { state.actSongIndex = index },
        setPlaying(state,act) { state.playing = act },
        changeSong(state,index) {
            let length = state.nowSongList.length -1
            if(index < 0){
                index = length
            }else if(index > length){
                index = 0
            }
            state.actSongIndex = index
        }
    },
    actions:{
        setSongList({ commit }, data) {
            let songs = _normalizeSongs(data)
            commit('setSongList',songs)
        },
        selectPlay({ commit, state },{ list,index }){
            commit('setNowSongList',list);
            commit('setPlaySongList',list[index]);
            commit('setActSongIndex',index);
            commit('setPlaying',true)
        }
    }
})

export default store