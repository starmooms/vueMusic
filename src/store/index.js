import Vue from "vue";
import Vuex from "vuex";

import { _normalizeSongs } from "../js/util.js"; //工具函数 用于筛选数据生成song对象

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        disc:"",
        songList: "",
        nowSongList: "",
        playSongList:[],
        actSong: "",
        playing: false,
    },
    getters:{
        
    },
    mutations:{
        setDisc(state,disc) { state.disc = disc },
        setSongList(state,list) { state.songList = list },
        setNowSongList(state,list) { state.nowSongList = list },
        setPlaySongList(state,song) { state.playSongList.push(song)},
        setActSong(state,song) { state.actSong = song },
        setPlaying(state,act) { state.playing = act },
    },
    actions:{
        setSongList({ commit }, data) {
            let songs = _normalizeSongs(data)
            commit('setSongList',songs)
        },
        selectPlay({ commit, state },{ list,index }){
            commit('setNowSongList',list);
            commit('setPlaySongList',list[index]);
            commit('setActSong',list[index]);
            commit('setPlaying',true)
        }
    }
})

export default store