<template>
    <h3>事件修饰符</h3>
    <!-- 【1】阻止默认事件 -->
    <a href="https://bing.com" @click="clickHandle1($event)">百度</a>
    <a href="https://bing.com" @click.prevent="clickHandle2">百度</a>
    <!-- 【2】 -->
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        clickHandle1(e) {
            // e.preventDefault：阻止默认事件
            e.preventDefault()
            console.log('clickHandle1');
        },
        clickHandle2() {
            console.log('clickHandle2');
        }
    }
}
</script>
