import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import { _normalizeSongs } from "../js/util.js"; //工具函数 用于筛选数据生成song对象

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        disc:"",
        songList: "",
    },
    getters:{
        
    },
    mutations:{
        setDisc(state,disc) { state.disc = disc },
        setSongList(state,songs) { state.songList = songs },
    },
    actions:{
        setSongList({ commit }, data) {
            let songs = _normalizeSongs(data)
            commit('setSongList',songs)
        }
    }
})

export default store