<template>
    <div class="details-box">
        <div class="top-bg" >
            <div class="back">
                <a href="javascript:;" @click="back">
                    <i class="iconfont ico-back"></i>
                </a>
            </div>
            <div class="tit">
                <h1>{{ disc.dissname }}</h1>
            </div>
            <div class="bg-image" 
                ref="bgImage"
                :style="topBgScale"
            ></div>
        </div>
        <div class="bottom-box">
            <div class="det-scroll-box">
                <scroll :data = 'songList'
                        :sets = 'scrollSets'
                        @scroll = "scrollAct"
                >
                    <songList></songList>
                </scroll>
            </div>
        </div>
    </div>
</template>

<script>
import scroll from "./scroll";
import songList from "./songList"
import { mapState } from "vuex";


export default {
    components:{ scroll,songList },
    data(){
        return {
            scrollSets:{
                listenScroll: true,
                probeType: 3
            },
            scrollY: 0,
        }
    },
    mounted() {
        this.$nextTick(()=>{
            if(! this.$refs.bgImage) return
            this.imageHeight = this.$refs.bgImage.clientHeight
        })
    },
    computed:{
        ...mapState(['disc','songList']),
        topBgScale(){
            return {
                transform: this.scrollY>0 ? `scale(${1+(this.scrollY/this.imageHeight)})` : `1`,
                zIndex: this.scrollY>0 ? `10` : `0`,
                backgroundImage: `url(${this.disc.imgurl})`
            }
        }
    },
    methods:{
        back(){
            this.$router.back()
        },
        scrollAct(pos){
            this.scrollY = pos.y
        }
    },
    watch:{
        // scrollY(newVal){
        //     let percent = Math.abs(newVal / this.imageHeight)
        //     let obj = '';
        //     if(newVal > 0){
        //         obj = { 
        //             transform: `scale(${1+percent})`,
        //             zIndex: '10'
        //         }
        //     }else{
        //         obj = { 
        //             transform: '1',
        //             zIndex: '0'
        //         }
        //     }
        //     this.topBgScale = Object.assign(this.topBgScale,obj)
        // }
    }
}
</script>


<style lang="less" scoped>
.details-box{
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: @clbody;
    .top-bg{
        position: relative;
        .bg-image{
            background-size: cover;
            height: 0;
            padding-top:70%;
            transform-origin: top;
        }
        .back{
            position: absolute;
            top: 0;
            left: 10px;
            z-index: 21;
            a{
                display: block;
                padding:0 10px;
                .ico-back{
                    font-size: 30px;
                    color:@climport;
                    line-height: 40px;
                    position: absolute;
                }
            }
        }
        .tit{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 20;
            h1{
                width: 68%;
                margin: 0 auto;
                line-height: 40px;
                white-space: nowrap;
                overflow: hidden;
                font-weight: normal;
                text-overflow: ellipsis;
                font-size: @txt-18;
                text-align:center;
            }
        }
    }
    .bottom-box{
        position: absolute;
        top:40px;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: hidden;
        .det-scroll-box{
            position: absolute;
            top:0;
            bottom: 0;
            left:0;
            right: 0;
            // padding-top:calc(70%);
            // margin-top: -40px;
            padding-top: ~'calc(70% - 40px)';
            >.scroll-box{
                overflow: visible;
            }
        }
    }
}
</style>
<style lang="less">
    .scroll-content{
        background-color:@clbody !important;
    }
</style>

