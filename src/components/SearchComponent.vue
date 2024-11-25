<template>
    <input type="text" v-model="search">
    <!--    <p>search : {{ search }}</p>-->
</template>

<script>
export default {
    data() {
        return {
            search: '',
        }
    },
    watch: {
        search(newValue, oldValue) {
            this.$emit('SearchInput', newValue)
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>