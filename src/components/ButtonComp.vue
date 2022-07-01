<script setup>
import { ref } from "@vue/reactivity"

let props = defineProps(['btnData'])
let { btnClass, btnTxt } = props.btnData
</script>

<template>
    <a href="/" class="btn" :class="btnClass">{{ btnTxt }}</a>
</template>