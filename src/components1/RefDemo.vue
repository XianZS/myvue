<!--
-- Dom 级别操作
-- ref : 直接获取某个标签的全部
-- 语法 : this.$refs.
-->
<template>
    <div ref="mySome1" class="container">{{ msg }}</div>
    <input ref="mySome2" type="text" value="内容" style="color:red;"><br>
    <button @click="getElementHandle">点击</button>
</template>

<script>

/**
 * 内容改变 : {{ 模板语法 }}
 * 属性改变 : v-bind:指令
 * 事件 : v-on:click
 **/

export default {
    data() {
        return {
            msg: "测试"
        }
    },
    methods: {
        getElementHandle() {
            /**
             * 【1】获取当前标签的所有值
             * **/
            console.log(this.$refs.mySome1);
            // <div className="container">测试</div>
            console.log(this.$refs.mySome2);
            // <input type="text" value="内容" style="color: red;"/>
            /**
             * 【2】在获取当前标签的所有值之后，可以使用[.属性]语法来获取某一个子属性的值
             * */
            console.log(this.$refs.mySome2.value, this.$refs.mySome2.style.color);
            // 内容 red
        }
    }
}
</script>

