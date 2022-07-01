<script setup>
import { ref } from "@vue/reactivity"

let props = defineProps(['tData'])
let { s, t, sClass, tClass } = props.tData
</script>

<template>
    <h3 :class="sClass">{{ s }}</h3>
    <h2 :class="tClass">{{ t }}</h2>
</template>