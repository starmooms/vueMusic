<template>
    <main class="main">
        <scroll>
            <slider v-show="bannerList" :data="bannerList">
                <div v-for="(item,index) in bannerList" :key="index" >
                    <img :src="item.picUrl">
                </div>
            </slider>
            <div class="recommend-list" v-show="dataList.length">
                <h1 class="tit">热门歌单推荐</h1>
                <ul class="list">
                    <li class="list-item" v-for="item in dataList" @click="showItem(item)">
                        <div class="img-box">
                            <img :src="item.imgurl" alt="">
                        </div>
                        <div class="text-box">
                            <h2 class="name">{{ item.creator.name }}</h2>
                            <p class="msg">{{ item.dissname }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <loading v-show="!dataList.length"></loading>
        </scroll>
        <router-view></router-view>
    </main>
</template>
<script>
import slider from "./base/slider"
import scroll from "./base/scroll"
import loading from "./base/loading"
import { getBanner,getDiscList } from "../api/recommend.js"
import { ERR_OK } from "../js/config.js"
import { mapMutations } from "vuex"
    export default{
        data(){
            return {
                dataList:[],
                bannerList : [
                    {
                        picUrl:require("../image/banner1.jpg")
                    },
                    {
                        picUrl:require("../image/banner2.jpg")
                    },
                    {
                        picUrl:require("../image/banner3.jpg")
                    },
                ]
            }
        },
        created(){
            // setTimeout(()=>{
            //     let jsonData = require('../json/recommend.json');
            //     this.dataList = jsonData.data;
            // },400)
            this._getBanner();
            this._getDiscList();
        },
        methods:{
            showItem(item){
                this.$router.push({
                    path:`/recommend/${item.dissid}`
                })
                this.setDisc(item)
            },
            _getBanner(){
                getBanner().then(res => {
                    if(res.code === ERR_OK){
                        this.bannerList = res.data.slider;
                    }
                })
            },
            _getDiscList(){
                getDiscList().then(res => {
                    if(res.code === ERR_OK){
                        this.dataList = res.data.list;
                    }
                },data =>{
                    console.log(data)
                    this.dataList = data
                })
            },
            ...mapMutations(['setDisc'])
        },
        components:{ slider,scroll,loading },
        metaInfo : {
            title:'推荐',
            titleTemplate:'%s - MusicDemo',
        }
    }
</script>
<style lang="less" scoped>
.recommend-list{
    .tit{
        text-align: center;
        font-weight: normal;
        font-size: @txt-14;
        line-height: 60px;
        color:@climport;
    }
    .list{
        padding:0 20px 20px;
        .list-item{
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            &:last-child{
                margin-bottom: 0;
            }
            .img-box{
                flex:0 0 60px;
                margin-right: 20px;
            }
            .text-box{
                .name{
                    font-size: @txt-14;
                    color:@cltxt1;
                    margin-bottom: 10px;
                }
                .msg{
                    color:@cltxt2;
                }
            }
        }
    }
}
</style>

