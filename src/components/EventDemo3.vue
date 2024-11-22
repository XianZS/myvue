<template>
    <div>
        <p>{{ count }}</p>
        <button @click="addFunc" :style="fontSize"> +</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            fontSize: "font-size:30px;"
        }
    },
    methods: {
        addFunc(e) {
            // Vue中的event
            console.log(e.target.innerHTML = "add" + this.count);
            this.count++;
        }
    }
}
</script>
