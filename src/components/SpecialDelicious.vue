<script setup>
import ButtonComp from '../components/ButtonComp.vue';
defineProps(['btnData'])
</script>
<template>
    <div class="col-md-6 align-self-center d-contents">
        <div class="single-offer-wrap" style="background-color: var(--main-color)">
            <img class="bg-img" src="/data/imgs/half-burger.png" alt="img" />
            <div class="wrap-details">
                <h2>Special Deliciaus</h2>
                <h5>Maxican Pizza Testes Better</h5>
                <ButtonComp :btnData=btnData />
            </div>
            <div class="offer-sticker">
                <img :width="150" src="https://www.transparentpng.com/thumb/special-offer/special-offer-tag-png-photo-6.png" alt="img" />
            </div>
        </div>
    </div>
</template>