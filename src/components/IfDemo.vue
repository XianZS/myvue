<template>
    <h3>条件渲染</h3>
    <!-- v-if 和 v-else 属于同一个模块，两者只能生效其一 -->
    <div v-if="flag">你可以看见我吗?</div>
    <div v-else>不能看见我</div>
    <!-- v-else-if 多个块使用 -->
    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <!-- v-show -->
    <div v-show="flag">你可以看见我</div>
</template>

<script>
export default {
    data() {
        return {
            // flag 为 true ，可以显示，反之无法显示
            flag: true,
            type: "B"
        }
    }
}
</script>