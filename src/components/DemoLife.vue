<template>
    <h3>组件的生命周期函数</h3>
</template>

<script>
/**
 * 组件生命周期：
 *  创建期：beforeCreate created
 *  挂载期：beforeMount mounted
 *  更新期：beforeUpdate update
 *  销毁期：beforeUnmount unmounted
 * */
export default {
    data() {
        return {}
    },
    // 组件创建之前
    beforeCreate() {
        console.log('组件创建之前')
    },
    // 组件创建之后
    created() {
        console.log('组件创建之后')
    },
    // 组件渲染之前
    beforeMount() {
        console.log('组件渲染之前')
    },
    // 组件渲染之后
    mounted() {
        console.log('组件渲染之后')
    },
    // 组件更新之前
    beforeUpdate() {
        console.log('组件更新之前')
    },
    // 组件更新之后
    updated() {
        console.log('组件更新之后')
    },
    // 组件销毁之前
    beforeUnmount() {
        console.log('组件销毁之前')
    },
    // 组件销毁之后
    unmounted() {
        console.log('组件销毁之后')
    },
}
</script>

<style scoped>

</style>