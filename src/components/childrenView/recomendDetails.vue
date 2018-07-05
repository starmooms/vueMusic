<template>
    <transition name="slide">
        <detailsList></detailsList>
    </transition>
</template>

<script>
import detailsList from '../base/detailsList';
import { getSongList } from '../../api/recommend.js';
import { mapState,mapActions } from "vuex";
import { ERR_OK } from '../../js/config';

export default {
    components:{ detailsList },
    created(){
        if(!this.disc){
            this._goBack()
            return false;
        }
        this._getSongList()
    },
    computed:{
        ...mapState(['disc'])
    },
    methods:{
        _goBack(){
            this.$router.push('/recommend')
        },
        _getSongList(){
            getSongList(this.disc.dissid).then(res => {
                if(res.code === ERR_OK){
                    this.setSongList(res.cdlist[0].songlist)
                }
            })
        },
        ...mapActions(['setSongList'])
    }
}
</script>

<style lang="less" scoped>
//动画
.slide-enter-active,.slide-leave-active{
    transition:all .3s;
}
.slide-enter, .slide-leave-to{
    transform: translate3d(100%,0,0);
}
</style>
