<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot" v-for="(item,index) in dots" :key="index" :class="{active:index == currentPageIndex}"></span>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default{
    data(){
        return {
            dots:[],
            currentPageIndex:0
        }
    },
    props:{
        sets:{
            type:Object,
            default:null
        },
        showDots:{
            type:Boolean,
            default:true
        },
        data:{
            default:null
        }
    },
    mounted() {
        this.upDate();
        window.addEventListener('resize',()=>{
            if(!this.slider || !this.slider.enabled){
                return
            }
            clearTimeout(this.resizeTimer)
            this.resizeTimer = setTimeout(()=>{
                if(this.slider.isInTransition){
                    this._onScrollEnd()
                }else{
                    if(this.autoPlay){
                        this._play()
                    }
                }
                this.refresh()
            },60)
        })
    },
    computed: {
        opts() {
            const defaultOpts = {
                probeType: 1,
                click:true,
                loop:true,
                autoPlay:true,
                interval:4000,
                scrollX:true,
                scrollY:false,
                momentum:false,     // 是否开启惯性滚动，关闭可以提升效率
                speed:400,
                threshold:.3
            }
            return Object.assign(defaultOpts,this.sets)
        }
    },
    methods: {
        upDate(){
            if(this.slider){
                this.slider.destroy();
            }
            setTimeout(()=>{
                this.init();
            },20)
        },
        init(){
            clearTimeout(this.timer)
            this.currentPageIndex = 0;

            this._setWidth()
            if(this.showDots){
                this._initDots()
            }
            this._initSlider()
            if(this.opts.autoPlay){
                this._play();
            }
        },
        _setWidth(isResize){

            // let width = this.$refs.slider.clientWidth
            // console.log(width)
            // let sliderGroup = this.$refs.sliderGroup
            // // let sliderItem = sliderGroup.children
            // this.children = this.$refs.sliderGroup.children
            // let sliderLength = sliderGroup.children.length

            // for(let i = 0;i < sliderLength;i++){
            //     let child = this.children[i];
            //     child.classList.add('slider-item')
            //     child.style.width = width + 'px';
            // }
            // if(this.opts.loop && !isResize){ //如果是窗口变化 child已为实际个数
            //     sliderGroup.style.width = (sliderLength+2) * width + 'px';
            // }

            this.children = this.$refs.sliderGroup.children
            let width = 0
            let sliderWidth = this.$refs.slider.clientWidth
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i]
                child.style.width = sliderWidth + 'px'
                child.classList.add('slider-item')
                width += sliderWidth
            }
            if (this.opts.loop && !isResize) {
                width += 2 * sliderWidth
            }
            this.$refs.sliderGroup.style.width = width + 'px'
        },
        _initSlider() {
            //初始化插件
            this.slider = new BScroll(this.$refs.slider,{
                probeType: this.opts.probeType,
                click: this.opts.click,
                scrollX:this.opts.scrollX,
                scrollY:this.opts.scrollY,
                momentum: this.opts.momentum,
                snap:{
                    loop: this.opts.loop,
                    threshold:this.opts.threshold,
                    speed:this.opts.speed
                }
            })
            this.slider.on('scrollEnd',this._onScrollEnd)
            this.slider.on('touchEnd',()=>{

                if(this.opts.autoPlay){
                    this._play()
                }
            })
            this.slider.on('beforeScrollStart', () => {
                if (this.opts.autoPlay) {
                    clearTimeout(this.timer)
                }
            })
        },
        _onScrollEnd(){
            let pageIndex = this.slider.getCurrentPage().pageX  //新版获取的是去掉循环的索引
            this.currentPageIndex = pageIndex
            if(this.opts.autoPlay){
                clearInterval(this.timer)
                this._play()
            }
        },
        _initDots(){
            this.dots = new Array(this.children.length)
        },
        _play(){
            clearInterval(this.timer)
            this.timer = setTimeout(()=>{
                this.slider.next()
            },this.opts.interval)
        },
        refresh(){
            this._setWidth(true);
            this.slider.refresh();
        }
    },
    watch:{
        opts(){
            if(!this.slider) return
            this.upDate()
        },
        data(){
            if(!this.slider) return
            this.upDate()
        }
    },
    activated() {
      if (!this.slider) return
      this.slider.enable()
      let pageIndex = this.slider.getCurrentPage().pageX
      this.slider.goToPage(pageIndex, 0, 0)
      this.currentPageIndex = pageIndex
      if (this.opts.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      this.slider.disable()
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      this.slider.disable()
      clearTimeout(this.timer)
    },
}
</script>

<style lang="less" scoped>
.slider{
    width: 100%;
    position: relative;
    overflow: hidden;
    .slider-group{
        .slider-item{
            float: left;
            box-sizing: border-box;
            overflow: hidden;
            img{
                width: 100%;
                display: block;
            }
        }
    }
    .dots{
        position: absolute;
        right: 0;
        left: 0;
        bottom: 12px;
        transform: translateZ(0);
        text-align: center;
        font-size: 0;
        .dot{
            display: inline-block;
            margin: 0 4px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: @cltxt1;
            &.active{
                width: 20px;
                border-radius: 5px;
            }
        }
    }
}
</style>
