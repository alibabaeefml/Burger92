<script setup>
import ButtonComp from '../components/ButtonComp.vue';
defineProps(['btnData'])
</script>
<template>
    <div class="single-offer-wrap" style="background-color: #ffeecc">
        <div class="animated-img">
            <img src="/data/imgs/road.png" alt="img" />
        </div>
        <div class="animated-img animated-img-2">
            <img src="/data/imgs/road.png" alt="img" />
        </div>
        <div class="overlay-gradient"></div>
        <div class="wrap-details">
            <h3 class="text-heading">
                The Fastest In Delivery <span>Food</span>
            </h3>
            <ButtonComp :btnData=btnData />
        </div>
        <img class="bg-img-2" src="/data/imgs/delivery.png" alt="img" />
    </div>
</template>