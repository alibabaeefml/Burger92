<script setup>
import { ref } from 'vue';
import ProductRating from './ProductRating.vue';
import ProductPrice from './ProductPrice.vue';
import LikeBtn from './LikeBtn.vue';
import ButtonComp from './ButtonComp.vue';
const props = defineProps(['item']);
const btnData = ref({ btnTxt: 'Choose Options', btnClass: 'btn-secondary' })
</script>
<template>
    <div class="col-lg-4 col-md-6" v-if="item.name">
        <div class="single-item-wrap">
            <div class="thumb">
                <img :src="item.img" alt="img" />
                <LikeBtn />
            </div>
            <div class="wrap-details">
                <h5><a href="/">{{ item.name }}</a></h5>
                <div class="wrap-footer">
                    <ProductRating :id="item.name.split(' ').join('_')" :rating=item.rating
                        :starsId="item.name.split(' ').join('_')" />
                    <ProductPrice />
                </div>
            </div>
            <div class="btn-area">
                <ButtonComp :btnData="btnData" />
            </div>

        </div>
    </div>
</template>