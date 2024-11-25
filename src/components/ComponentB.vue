<template>
    <h3>ComponentB</h3>
    <h4>{{ title }}</h4>
    <h4>{{ defaultValue }}</h4>
    <h4>{{ MyList }}</h4>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        title: {
            // type: Number,
            type: String,
            default: "默认数值"
        },
        defaultValue: {
            type: String,
            default: "defaultValue"
        },
        MyList: {
            type: Array,
            default() {
                return ["d", "e", "f", "a", "u", "l", "t"]
            }
        }
    }
}
</script>

<style scoped>

</style>