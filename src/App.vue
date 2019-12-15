<template>
<div class="app-container">
<p> {{ title }} </p>
<p> 作者是 {{ $store.state.author }}</p>
<div @click="add" class="app-btn">这是按钮</div>
<router-link to="/home">home</router-link>
<router-link to="/about">about</router-link>
<router-view></router-view>
</div> 
</template>
<style scoped lang="less">
    .app-container {
.app-btn {
    color: red;
}
}
</style>
<script>
export default {
    data() {
        return {
            title: '这是使用 webpack 构建的'
        }
    },
    methods: {
        add () {
            console.log('1111111111111')
        }
    },
    created() {
        console.log('app 构建了')
        this.$axios('getUserInfo')
    },
}
</script>