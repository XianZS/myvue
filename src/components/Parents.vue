<script>
import Child from "@/components/Child.vue";

export default {
    data() {
        return {
            message: "ds1",
            age: 20,
            names: ["jom", "kom", "lom"],
            userInfo: {
                names: "kom",
                age: 10,
            }
        }
    },
    components: {
        Child
    }
}
</script>

<template>
    <h3>Parent</h3>
    <Child v-bind:some="message" v-bind:age="age" v-bind:names="names" v-bind:userInfo="userInfo"/>
</template>

<style scoped>

</style>