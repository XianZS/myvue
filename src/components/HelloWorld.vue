<!--
    [1]v-bind:
    双花括号不能在HTML attributes(html样式)中使用
    如果想要响应式的相应，需要加上v-bind:
    [2]语法
    [2.1]使用语法：
    <标签 v-bind:属性="js">测试</标签>
    [2.2]简写语法:
    <标签 :属性="js">测试</标签>
    [3]disable——button
    disabled=True：不可以点击
    disabled=false：可以点击
-->
<template>
    <p v-bind:style="msg">测试</p>
    <div :style="newmsg">测试</div>
    <button :disabled="isButtonDisabled" :style="newmsg">点击</button>
    <!-- 动态绑定多个值 -->
    <p v-bind="objectMy">动态绑定多个值</p>
</template>

<script>
export default {
    data() {
        return {
            msg: "color:red",
            newmsg: "font-size:30px;",
            isButtonDisabled: false,
            // 动态绑定多个值
            objectMy : {
                style: 'color:red',
                id:'container'
            }
        }
    }
}
</script>


<!--<script setup>-->
<!--defineProps({-->
<!--  msg: {-->
<!--    type: String,-->
<!--    required: true,-->
<!--  },-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <div class="greetings">-->
<!--    <h1 class="green">{{ msg }}</h1>-->
<!--    <h3>-->
<!--      You’ve successfully created a project with-->
<!--      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +-->
<!--      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.-->
<!--    </h3>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--h1 {-->
<!--  font-weight: 500;-->
<!--  font-size: 2.6rem;-->
<!--  position: relative;-->
<!--  top: -10px;-->
<!--}-->

<!--h3 {-->
<!--  font-size: 1.2rem;-->
<!--}-->

<!--.greetings h1,-->
<!--.greetings h3 {-->
<!--  text-align: center;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  .greetings h1,-->
<!--  .greetings h3 {-->
<!--    text-align: left;-->
<!--  }-->
<!--}-->
<!--</style>-->
