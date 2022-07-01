<script setup>
defineProps(['subItem'])
</script>
<template>
    <div class="col-md-3 col-6">
        <div class="single-item-wrap text-center">
            <div class="thumb">
                <img :src="subItem.img" alt="img" />
            </div>
            <div class="wrap-details">
                <h6>
                    <a href="#">{{ subItem.name }}</a>
                </h6>
            </div>
        </div>
    </div>
</template>