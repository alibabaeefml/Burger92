<script setup>
import ButtonComp from '../components/ButtonComp.vue';
defineProps(['btnData'])
</script>
<template>
    <div class="single-offer-wrap" style="background-color: var(--heading-color)">
        <img class="bg-img" src="/data/imgs/cocktail.png" alt="img" />
        <div class="wrap-details">
            <h3>Enjoy Our Delicious Item</h3>
            <ButtonComp :btnData=btnData />
        </div>
    </div>
</template>