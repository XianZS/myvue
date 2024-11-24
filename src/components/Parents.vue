<script>
import Child from "@/components/Child.vue";

export default {
    data() {
        return {}
    },
    components: {
        Child
    }
}
</script>

<template>
    <h3>Parent</h3>
    <Child some="传入数据"/>
</template>

<style scoped>

</style>