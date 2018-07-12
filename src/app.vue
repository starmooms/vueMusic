<template>
    <div id="app">
        <vHeader></vHeader>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <player></player>
    </div>
</template>

<script>
import slider from './components/base/slider'
import vHeader from './components/vHeader'
import player from './components/player'
    export default {
        data () {
            return {
                name : "vue hellow !!!",
                a : "d",
            }
        },
        components:{ slider,vHeader,player },
    }
</script>

<style lang="less">

</style>
