/*
    methods和computed的区别？
    【1】methods方法调用总是会在重新渲染的时候再次执行函数
    【2】computed计算属性会基于响应式依赖被缓存，一个计算属性仅会在其响应式依赖更新时才重新计算
*/
<script>
export default {
    data() {
        return {
            some: {
                names: "SuperPinnacle",
                content: ["Python", "java", "C"]
            }
        }
    },
    methods: {
        // 函数定义
    },
    /*
    * computed : { 计算属性 }
    * 将模板语法里面的复杂表达式存放到计算属性之中
    * */
    computed: {
        someContent() {
            return this.some.names.length > 0 ? "Yes" : "No"
        }
    }
}
</script>

<template>
    <h3>{{ some.names }}</h3>
    <p>{{ someContent }}</p>

</template>
