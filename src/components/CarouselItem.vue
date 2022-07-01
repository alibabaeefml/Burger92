<script setup>
defineProps(['item']);
</script>
<template>
    <div class="testimonial-wrap">
        <p>{{ item.review }}</p>
        <h3>{{ item.author }}</h3>
        <h6>{{ item.prof }}</h6>
    </div>
</template>