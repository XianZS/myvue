/*
style的绑定
*/
<template>
    <p :style="p_style">Style绑定</p>
</template>

<script>
import {resolveDirective} from "vue";

export default {
    data() {
        return {
            p_style: {
                color: "green",
                fontSize: 40 + "px"
            }
        }
    },
    methods: {resolveDirective},
    computed: {}
}
</script>

