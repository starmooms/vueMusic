<template>
    <div class="scroll-box" ref="wrapper">
        <div class="scroll-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default{
    props:{
        sets:{
            type:Object,
            default:null
        },
        data:null
    },
    mounted() {
        setTimeout(()=>{
             this._initScroll()
        },20)
    },
    computed: {
        opts() {
            const defaultOpts = {
                probeType: 3,   //截留模式
                click : true,    //点击列表派发事件
                scrollX : false,  //是否横向滚动
                scrollY : true
                // refreshDelay : 20   //data变化时重新更新插件的定时器  //直接可$nextTick
            }
            return Object.assign(defaultOpts,this.sets)
        }
    },
    methods: {
        _initScroll() {
            if(!this.$refs.wrapper) return
            //初始化插件
            this.scroll = new BScroll(this.$refs.wrapper,this.opts)
            //滚动事件
            if(this.opts.listenScroll){
                this.scroll.on('scroll',(pos)=>{
                    this.$emit('scroll',pos)
                })
            }
            //下拉到底部
            if(this.opts.pullup){
                this.scroll.on('scrollEnd',()=>{
                    if(this.scroll.y <= (this.scroll.maxScrollY + 50)){
                        this.$emit('scrollToEnd')
                    }
                })
            }
            //上拉到顶部
            if(this.opts.pulldown){
                this.scroll.on('touchend',(pos) =>{
                    if(pos.y > 50){
                        this.$emit('pulldown')
                    }
                })
            }
            //滚动前发生
            if(this.opts.beforeScroll){
                this.scroll.on('beforeScrollStart',() =>{
                    this.$emit('beforeScroll')
                })
            }
        },
        // disable() {
        //     // 代理better-scroll的disable方法  这样可直接this.disable调用
        //     this.scroll && this.scroll.disable()  //this.scroll存在就发生this.scroll.disable    
        // },
        // enable() {
        //     // 代理better-scroll的enable方法
        //     this.scroll && this.scroll.enable()
        // },
        refresh() {
            // 代理better-scroll的refresh方法
            this.scroll && this.scroll.refresh()
        },
        // scrollTo() {
        //     // 代理better-scroll的scrollTo方法
        //     this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        // },
        scrollToElement() {
            // 代理better-scroll的scrollToElement方法
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    },
    watch:{
        data() {
            this.$nextTick(()=>{
                this.refresh()
            })
        }
    }
}
</script>

<style lang="less" scoped>
.scroll-box{
    height: 100%;
    overflow: hidden;
    >.scroll-content{
        min-height: 101%;
    }
}
</style>
