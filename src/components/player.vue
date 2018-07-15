<template>
    <div class="player" v-if="actSong">
        <!-- 播放全屏页面 -->
        <transition name="fullscreenani" >
            <div class="page-player" v-show="fullScreen">
                <div class="full-bg">
                    <img :src="actSong.image">
                </div>
                <div class="full-top">
                    <div class="back">
                        <a href="javascript:;" class="back-btn" @click="back">
                            <i class="iconfont ico-back"></i>
                        </a>
                    </div>
                    <p class="name">{{ actSong.name }}</p>
                    <p class="singer">{{ actSong.singer }}</p>
                </div>
                <div class="full-center">
                    <div class="cd-wrapper">
                        <div class="img-box" 
                            :class="{ anistop:!playing }"
                        >
                            <img class="song-image" alt="" :src="actSong.image">
                        </div>
                    </div>
                </div>
                <div class="full-bottom">
                    <div class="progress-box">
                        <span class="time">{{ currentTime | forTime }}</span>
                        <div class="progress-container"
                            ref = "progress"
                            @touchstart.parent = "progressTouchStart"
                            @touchmove.parent = "progressTouchMove"
                            @touchend = "progressTouchEnd"
                            >
                            <div class="progress">
                                <div class="progress-length"
                                    :style= "{ width: progressPrecent * 100 + '%'}">
                                    <div class="progress-btn-box"></div>
                                </div>
                            </div>
                        </div>
                        <span class="time time-r">{{ actSong.duration | forTime }}</span>
                    </div>
                    <div class="control">
                        <a class="control-i-box" href="javascript:;">
                            <i class="iconfont ico-sequence" ></i>
                        </a>
                        <a class="control-i-box" href="javascript:;"
                        @click = "prevSong" >
                            <i class="iconfont ico-next ico-prev" ></i>
                        </a>
                        <a class="control-i-box" href="javascript:;"
                            @click = "togglePlaying">
                            <i class="iconfont setplay" :class = "icofull"></i>
                        </a>
                        <a class="control-i-box" href="javascript:;"
                            @click = "nextSong" >
                            <i class="iconfont ico-next" ></i>
                        </a>
                        <a class="control-i-box" href="javascript:;">
                            <i class="iconfont ico-not-favorite" ></i>
                        </a>
                    </div>
                </div>
            </div>
        </transition>

        <!-- 播放底部控件 -->
        <div class="min-player"  @click = "open">
            <div class="play-img">
                <img :src="actSong.image"
                    alt=""
                    :class="{ anistop:!playing }">
            </div>
            <div class="play-msg">
                <p class="name">{{ actSong.name }}</p>
                <p class="disc">{{ actSong.singer }}</p>
            </div>
            <div class="play-control">
                <div class="btn-box" 
                    @click.stop = "togglePlaying"
                >
                    <svg class="progress-svg" width="32" height="32" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle class="progress-bg" r="50" cx="50" cy="50" fill="transparent"></circle>
                        <circle class="progress-length" r="50" cx="50" cy="50" fill="transparent"
                                :stroke-dasharray = "dashArray"
                        ></circle>
                    </svg>
                    <i class="iconfont" :class="iconMin"></i>
                </div>
            </div>
        </div>

        <!-- 音乐播放 -->
        <audio :src = "actSong.url"
                ref = "audio"
                @timeupdate = "updateTime"
                @ended = "nextSong"
        ></audio>
    </div>
</template>

<script>
import { mapState,mapActions,mapGetters,mapMutations } from 'vuex'
export default {
    data(){
        return {
            playing : true,  //是否播放
            currentTime: 0,  //播放时间
            fullScreen: false, //是否全屏
            progressPrecent: 0, //进度条
        }
    },
    computed: {
        ...mapState(['nowSongList','actSongIndex']),
        ...mapGetters(['actSong']),
        iconMin() {
            return this.playing ? 'ico-playstop' : 'ico-playstar'
        },
        icofull() {
            return this.playing ? 'ico-playstoptwo' : 'ico-playstartwo'
        },
        precent() {
            return this.currentTime / this.actSong.duration
        },
        dashArray() { //min 播放器进度虚线
            //Math.PI * 100
            return [ this.precent * Math.PI * 100,2000]
        },
    },
    watch: {
        playing(newSong) {
            const audio = this.$refs.audio;
            this.$nextTick(() => {
                newSong ? audio.play() : audio.pause();
            })
        },
        actSong(newSong) {
            this.$nextTick(() => {
                this.playing = true
                this.$refs.audio.play()
            })
        },
        precent(newVal){
            if(newVal >=0 && !this.touch.initiated){
                this.progressPrecent = newVal
            }
        }
    },
    created(){
        this.touch = {};
    },
    filters: {
        forTime(num) {
            num = parseInt(num);
            let minute = parseInt(num / 60);
            let second = num % 60
            second = second < 10 ? `0${second}` : second
            return `${minute}:${second}`
        }
    },
    methods: {
        ...mapActions(['prevSong']),
        ...mapMutations(['changeSong']),
        togglePlaying() {
            this.playing ? this.playing = false : this.playing = true;
        },
        updateTime(e) {
            //音乐进度改变发生 改变时间进度
            this.currentTime = e.target.currentTime
        },
        open() {
            this.fullScreen = true
        },
        back() {
            this.fullScreen = false
        },
        prevSong() {
            let index = this.actSongIndex - 1
            this.changeSong(index)
        },
        nextSong() {
            let index = this.actSongIndex + 1
            this.changeSong(index)
        },
        progressTouchStart(e) {
            this.touch.initiated = true
            this.touch.startX = e.touches[0].pageX
            //进度条总长
            this.touch.maxWidth = this.$refs.progress.clientWidth
            //减去进度条离屏幕左边距离 算出点击的位置
            this.touch.posX = this.touch.startX - this.$refs.progress.offsetLeft
            let movePrecent = this.touch.posX / this.touch.maxWidth
            this.progressPrecent = movePrecent
        },
        progressTouchMove(e) {
            if(!this.touch.initiated) return

            let moveX = e.touches[0].pageX - this.touch.startX + this.touch.posX
            let movePrecent = moveX / this.touch.maxWidth
            let addProgress = Math.min(Math.max(movePrecent,0),1)
            this.progressPrecent = addProgress
        },
        progressTouchEnd(e) {
            this.touch.initiated = false
            let curTime = this.progressPrecent * this.actSong.duration
            this.audioToCurrent(curTime)
        },
        audioToCurrent(curTime) {
            this.$refs.audio.currentTime = curTime
        }
    }
}
</script>

<style lang="less" scoped>
    .player{
        .page-player{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 201;
            width: 100%;
            height: 100%;
            background-color: #454545;
            display: flex;
            flex-flow: column nowrap;
            .full-bg{
                position: absolute;
                top:0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                opacity: .6;
                filter: blur(20px);
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            .full-top{
                .back{
                    position: absolute;
                    top:0;
                    left: 0;
                    z-index: 2;
                    margin-left:6px;
                    .back-btn{
                        width: 40px;
                        text-align: center;
                        display: block;
                        transform: rotate(-90deg);
                        .ico-back{
                            line-height: 40px;
                            font-size: 30px;
                            color:@climport;
                        }
                    }
                }
                .name{
                    width: 68%;
                    margin: 0 auto;
                    font-size: @txt-18;
                    color:@cltxt1;
                    line-height: 40px;
                    text-align: center;
                    .textOver();
                }
                .singer{
                    width: 96%;
                    .textOver();
                    margin: 0 auto;
                    text-align: center;
                    font-size: @txt-14;
                    line-height: 20px;
                }
            }
            .full-center{
                flex:1 0;
                margin-top: 20px;
                // position: relative;
                .img-box{
                    // position: absolute;
                    // left: 10%;
                    // top: 0;
                    // padding-bottom: 80%;
                    // width: 80%;
                    // height: 0;
                    // margin: 0 auto;
                    width: 80vw;
                    height: 80vw;
                    margin: 0 auto;
                    max-width: 600px;
                    max-height: 600px;
                    animation:rotate 20s linear infinite both;
                    border-radius: 50%;
                    box-sizing: border-box;
                    border:10px solid rgba(255,255,255,0.1);
                    &.anistop{
                        animation-play-state:paused;
                    }
                    .song-image{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }
            .full-bottom{
                padding-bottom: 50px;
                .progress-box{
                    width: 80%;
                    margin: 0 auto;
                    padding:10px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .time{
                        width: 36px;
                        line-height: 30px;
                        font-size: @txt-12;
                        &.time-r{
                            text-align: right;
                        }
                    }
                    .progress-container{
                        height: 30px;
                        flex:1 0;
                        display: inline-flex;
                        align-items: center;
                        .progress{
                            width: 100%;
                            background-color:rgba(0,0,0,.3);
                            height: 4px;
                            .progress-length{
                                max-width: 100%;
                                height: 100%;
                                background-color:@climport;
                                position: relative;
                                &:after{
                                    content: '';
                                    position: absolute;
                                    top:50%;
                                    left: 100%;
                                    margin-left: -8px;
                                    margin-top:-8px;
                                    width: 16px;
                                    height: 16px;
                                    background-color:@climport;
                                    border:3px solid #fff;
                                    border-radius: 50%;
                                    box-sizing: border-box;
                                }
                            }
                        }
                    }
                    
                }
                .control{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .control-i-box{
                        margin: 0 4%;
                        .iconfont{
                            color:@climport;
                            font-size: 30px;
                            &.ico-prev{
                                transform: rotate(180deg);
                                display: block;
                            }
                            &.setplay{
                                font-size: 40px;
                            }
                        }
                    }
                }
            }
            &.fullscreenani-enter-active,&.fullscreenani-leave-active{
                transition: all .4s;
                .full-top,.full-bottom{
                    transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
                }
                .cd-wrapper{
                    transition: all .38s linear;
                }
            }
            &.fullscreenani-enter,&.fullscreenani-leave-to{
                opacity: 0;
                .full-top{
                    transform: translate3d(0,-100px,0);
                }
                .full-bottom{
                    transform: translate3d(0,100px,0);
                }
                .cd-wrapper{
                    transform:translate3d(-35%,119%,0) scale(.18);
                }
            }
        }
        .min-player{
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 200;
            background-color:@clblue;
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            .play-img{
                flex: 0 0 40px;
                padding:0 10px 0 20px;
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    animation:rotate 20s linear infinite both;
                    &.anistop{
                        animation-play-state:paused;
                    }
                }
            }
            .play-msg{
                flex:1 1 auto;
                overflow: hidden;
                .name{
                    font-size:@txt-14;
                    color:@cltxt1;
                    .textOver();
                }
                .disc{
                    font-size:@txt-12;
                    color:@cltxt2;
                    margin-top:4px;
                    .textOver();
                }
            }
            .play-control{
                flex:0 0 32px;
                height: 32px;
                line-height: 32px;
                margin:0 10px;
                font-size: 0;
                text-align: center;
                position: relative;
                .progress-svg{
                    position: absolute;
                    top:0;
                    left: 0;
                    circle{
                        stroke-width: 10px;
                        transform-origin: center;
                        transform: scale(.9);
                        stroke:@climport2;
                        &.progress-length{
                            stroke:@climport;
                            transform: scale(.9) rotate(-90deg);
                        }
                    }
                }
                .iconfont{
                    font-size:14px;
                    vertical-align: middle;
                    display: inline-block;
                    color:@climport;
                    &.ico-playstar{
                        padding:1px 0 0 2px;
                    }
                     &.ico-playstop{
                        padding:1px 0 0 0;
                    }
                    // line-height: 32px;
                }
            }
        }
    }

    @keyframes rotate{
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>



