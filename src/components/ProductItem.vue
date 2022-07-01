<script setup>
import { ref } from "@vue/reactivity"

const props = defineProps(['c'])
const { name, active, img } = props.c
</script>

<template>
    <li class="nav-item" role="presentation">
        <button class="nav-link" :class="{ active: active }" @click="$emit('activeCat', name)" id="pills-ramen-tab"
            data-bs-toggle="pill" type="button" role="tab">
            <img :width="50" :src="img" alt="img" />{{ name }}
        </button>
    </li>
</template>