<template>
    <p @click="a">--------{{ username }}</p>
</template>

<script>
export default {
    props:['test'],
    computed : {
        username() {
            return this.$route.params.id;
        }
    },
    methods : {
        a(){
            this.$route.params.id = 4;
            console.log(this.$route.params.id)
        }
    }
}
</script>

<style lang='less' scoped>
    p{
        color:@clbody;
    }
</style>



