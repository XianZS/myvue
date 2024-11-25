<template>
    <h3>组件事件</h3>
    <h3>{{ number }}</h3>
    <ChildEvent @UseButton="UseButton"/>
</template>

<script>
import ChildEvent from "@/components/ChildEvent.vue";

export default {
    data() {
        return {
            number: 0
        }
    },
    components: {
        ChildEvent,
    },
    methods: {
        UseButton(data) {
            this.number++;
            console.log(data);
        }
    }
}
</script>
