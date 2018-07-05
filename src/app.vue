<template>
    <div id="app">
        <vHeader></vHeader>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import slider from './components/base/slider'
import vHeader from './components/vHeader'
    export default {
        data () {
            return {
                name : "vue hellow !!!",
                a : "d",
            }
        },
        components:{ slider,vHeader },
    }
</script>

<style lang="less">

</style>
