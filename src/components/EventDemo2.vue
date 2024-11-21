<template>
    <div>方法事件处理器</div>
    <button @click="addCountFunc">add</button>
    <p>Count is : {{ count }}</p>
</template>
<script>
export default {
    data() {
        return {
            count: 1
        }
    },
    // 所有的方法都写在 methods 之中
    methods: {
        addCountFunc() {
            console.log('addCountFunc');
            this.count++;
        }
    }
}
</script>
