<script setup>
defineProps(['item']);
</script>
<template>
    <div class="col-sm-6">
        <div class="single-about-wrap">
            <img :src="item.img" alt="img" />
            {{ item.feature }}
        </div>
    </div>
</template>