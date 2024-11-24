<template>
    <div>内联事件处理器的代码编写</div>
    <button @click="count++">Add</button>
    <p>{{ count }}</p>
</template>

<script>
export default {
    data() {
        return {
            count: 1
        }
    }
}
</script>

