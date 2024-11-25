<template>
    <h3>Child - Event</h3>
    <button @click="useButton">传递数据</button>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        useButton() {
            this.$emit('UseButton', "Child - Event");
        }
    }
}
</script>