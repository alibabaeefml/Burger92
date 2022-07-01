<script setup>
import { computed, onBeforeUpdate, onMounted, onRenderTriggered } from "@vue/runtime-core"
import { useStore as store } from "vuex";

const props = defineProps(['rating', 'starsId'])


</script>
<template>
    <div class="rating">
        {{ rating }}
        <span class="rating-inner" v-if="rating">
            <i class="ri-star-fill" v-for="(item, i) in Math.floor(rating)" :key="i"></i>
            <i class="ri-star-half-line" v-if="rating % 1 != 0"></i>
            <i class="ri-star-line" v-for="(item,i) in Math.floor(5 - rating)" :key="i"></i>
        </span>
        (200)
    </div>
</template>