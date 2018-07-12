<template>
    <ul class="song-list">
        <li class="song-item" 
            v-for = "(item,index) in songList"
            :key = "item.key"
            @click = "selectPlay({list:songList,index})"
        >
            <p class="name">{{ item.name }}</p>
            <p class="singer">{{ item.singer+'·'+item.album }}</p>
        </li>
    </ul>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default{
    computed : {
        ...mapState(['songList'])
    },
    methods:{
        ...mapActions(['selectPlay'])
    }
}
</script>

<style lang="less" scoped>
    .song-list{
        padding:20px 30px;
        .song-item{
            display: flex;
            height: 60px;
            flex-flow: column nowrap;
            justify-content: center;
            .name{
                font-size: @txt-14;
                color:@cltxt1;
                .textOver();
                padding-right:2%;
            }
            .singer{
                font-size: @txt-14;
                color:@cltxt2;
                margin-top: 8px;
                .textOver();
                padding-right:2%;
            }
        }
    }
</style>
