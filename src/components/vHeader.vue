<template>
    <header class="header">
        <div class="hd-top">
            <div class="name-box">
                <img class="user-img" src="../image/user-img.jpg" title="user">
                <p>Vue Music</p>
            </div>
            <div class="user-btn">
                <a href="javascript:;"><i class="iconfont ico-user"></i></a>
            </div>
        </div>
        <ul class="hd-nav">
            <li class="nav-item"><router-link class="nav-link" to="/recommend"><span>推荐</span></router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/user"><span>歌手</span></router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/user"><span>排行</span></router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/user"><span>搜索</span></router-link></li>
        </ul>
    </header>
</template>

<script>
    export default{
    }
</script>

<style lang="less" scoped>
.header{
    position: relative;
    .hd-top{
        position: relative;
        .name-box{
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            height: 44px;
            .user-img{
                width: 32px;
                height: 32px;
                margin-right: 10px;
                border-radius: 50%;
            }
            p{
                font-size: @txt-18;
            }
        }
        .user-btn{
            position: absolute;
            top:0;
            right: 0;
            line-height: 44px;
            padding:0 10px;
            font-size:@txt-20;
            color:@climport;
        }
    }
    .hd-nav{
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        .nav-item{
            flex:1;
            .nav-link{
                display: block;
                span{
                    color:@cltxt2;
                }
                &.router-link-active span{
                    color:@climport;
                    padding-bottom: 2px;
                    border-bottom: 2px solid @climport;
                }
            }
        }
    }
}
</style>

