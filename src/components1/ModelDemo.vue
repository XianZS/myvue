<!--
将input中的v-model="message"，并且在return中设置message
-->
<template>
    <h3>表单输入的绑定</h3>
    <form action="">
        <!-- 【1】基础使用 v-model -->
        <input type="text" v-model="message">
        <p>{{ message }}</p>

        <!-- 【2】基础使用 -->
        <input type="checkbox" id="my" v-model="checked">
        <!-- for 属性绑定 id ， 表示它绑定到哪个表单元素 -->
        <label for="my">{{ checked }}</label><br>

        <!-- 【3】v-model.number 基础使用 : 只会识别数字 -->
        <input type="text" v-model.number="ModelNumber">
        <button @click.prevent="Use1">点击</button>
        <p>{{ ModelNumber }}</p>

        <!-- 【4】v-model.trim 基础使用 : 去掉前后空格 -->
        <input type="text" v-model.trim="ModelTrim">
        <button @click.prevent="Use2">点击</button>
        <p>{{ ModelTrim }}</p>

        <!-- 【5】v-model.lazy 基础使用 : 懒加载，数据在每次提交后才会正式加载 -->
        <input type="text" v-model.lazy="ModelLazy">
        <button @click.prevent="Use3">点击</button>
        <p>{{ ModelLazy }}</p>
    </form>
</template>

<script>

export default {
    data() {
        return {
            // 默认值为NULL
            message: "",
            checked: false,
            ModelNumber: "",
            ModelTrim: "",
            ModelLazy: "",
        }
    },
    methods: {
        Use1() {
            console.log(this.ModelNumber);
        },
        Use2() {
            console.log(this.ModelTrim);
        },
        Use3() {
            console.log(this.ModelLazy);
        }
    }
}

</script>

