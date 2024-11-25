<script>
export default {
    data() {
        return {}
    },
    props: ["some", "age", "names", "userInfo"]
}
</script>

<template>
    <h2>Child</h2>
    <h2>传递字符串类型</h2>
    <h3>{{ some }}</h3>
    <h2>传递数字类型</h2>
    <h3>{{ age }}</h3>
    <h2>传递数组类型</h2>
    <h3 v-for="(Value,index) in names" :key="index">{{ Value }}</h3>
    <h2>对象类型</h2>
    <h3>{{ userInfo }}</h3>
</template>

<style scoped>

</style>