<template>
    <!-- 【3】显示组件 -->
    <MyDemo1/>
    <p class="newSome">测试</p>
</template>

<script>
// 【1】引入组件
import MyDemo1 from '@/components2/MyDemo1.vue'

export default {
    // 【2】注入组件
    components: {
        MyDemo1,
    }
}

</script>

<style>

</style>

