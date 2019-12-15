<template>
<div class="home-container">
<p> {{ title }} </p>
<div class="app-btn" @click="changeAuthor">changeAuthorName</div>
</div> 
</template>
<style>
.home-container {

}
</style>
<script>
export default {
    data() {
        return {
            title: '这是使用 home'
        }
    },
methods: {
    changeAuthor() {
        this.$store.commit('stateChange', { type: 'author', val: 'you'})
}
},
}
</script>