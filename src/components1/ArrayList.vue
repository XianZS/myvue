<script>
export default {
    data() {
        return {
            names: ["jom", "kom", "lom"]
        }
    },
    methods: {
        addThings() {
            // 【1】UI发生变化---变更方法（在原数组上进行更新）
            // 语法：this.变量名.push(一个元素)
            // this.names.push("some")
            // 【2】UI不发生变化---替换方法（新建一个数组）
            // 语法：this.变量名.concat(一个数组)
            // this.names = this.names.concat(["some"])
        }
    }
}
</script>

<template>
    <h3>数组监听变化</h3>
    <button @click="addThings">添加</button>
    <ul>
        <li v-for="(value,index) in names" :key="index">{{ value }}</li>
    </ul>
</template>
